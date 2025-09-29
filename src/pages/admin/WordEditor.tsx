import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import Quill from "quill";
import "react-quill/dist/quill.snow.css";
import {
  FaBold, FaItalic, FaUnderline,
  FaAlignLeft, FaAlignCenter, FaAlignRight,
  FaListUl, FaListOl, FaLink, FaImage,
  FaUndo, FaRedo, FaTable, FaChartBar, FaSuperscript
} from "react-icons/fa";


/* ---- Register custom size (style) and font whitelist so we can use px sizes & custom fonts ---- */
const SizeStyle = Quill.import("attributors/style/size");
SizeStyle.whitelist = [
  "12px","14px","16px","18px","20px","22px","24px","26px","28px","30px"
];
Quill.register(SizeStyle, true);

const Font = Quill.import("formats/font");
Font.whitelist = ["arial","georgia","times-new","courier-new","tahoma","verdana"];
Quill.register(Font, true);

type Props = {
  editorContent: string;
  setEditorContent: React.Dispatch<React.SetStateAction<string>>;
};

const WordLikeEditor: React.FC<Props> = (editorContent, setEditorContent) => {
  
  const quillRef = useRef<any>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [activeTab, setActiveTab] = useState<"home"|"insert"|"layout">("home");
  const [fontSize, setFontSize] = useState("16px");
  const [fontFamily, setFontFamily] = useState("arial");

  function getEditor() {
    return quillRef.current && quillRef.current.getEditor();
  }

  function applyFormat(format: string, value: any) {
    const editor = getEditor();
    if (!editor) return;
    editor.format(format, value);
    editor.focus();
  }

  /* ---- Image insertion: local file ---- */
  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const editor = getEditor();
      if (!editor) return;
      const range = editor.getSelection() || { index: editor.getLength(), length: 0 };
      editor.insertEmbed(range.index, "image", reader.result);
      editor.setSelection(range.index + 1);
    };
    reader.readAsDataURL(file);
    // reset input so same file can be reselected later
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  /* ---- Image insertion: link ---- */
  function insertImageFromUrl() {
    const url = prompt("Paste image URL");
    if (!url) return;
    const editor = getEditor();
    if (!editor) return;
    const range = editor.getSelection() || { index: editor.getLength(), length: 0 };
    editor.insertEmbed(range.index, "image", url);
    editor.setSelection(range.index + 1);
  }

  /* ---- Link insertion ---- */
  function insertLink() {
    const editor = getEditor();
    if (!editor) return;
    const url = prompt("Enter URL (https://...)");
    if (!url) return;
    const range = editor.getSelection();
    if (!range || range.length === 0) {
      // if no selection, insert text as link
      editor.insertText(range ? range.index : editor.getLength(), url, "link", url);
    } else {
      editor.format("link", url);
    }
  }

  /* ---- Table insert and helpers (works by inserting table HTML then DOM-manipulation for edit ops) ---- */
  function insertTable(rows = 2, cols = 2) {
    const editor = getEditor();
    if (!editor) return;
    const range = editor.getSelection() || { index: editor.getLength(), length: 0 };
    let html = `<table class="ql-custom-table" contenteditable="true"><tbody>`;
    for (let r = 0; r < rows; r++) {
      html += "<tr>";
      for (let c = 0; c < cols; c++) {
        html += `<td>&nbsp;</td>`;
      }
      html += "</tr>";
    }
    html += `</tbody></table><p><br></p>`;
    editor.clipboard.dangerouslyPasteHTML(range.index, html);
    editor.setSelection(range.index + 1);
  }

  function getClosestTableFromSelection(): HTMLTableElement | null {
    const sel = window.getSelection();
    if (!sel || !sel.anchorNode) return null;
    let node: Node | null = sel.anchorNode;
    while (node && node !== document.body) {
      if (node instanceof HTMLElement && node.tagName === "TABLE") {
        return node as HTMLTableElement;
      }
      if (node instanceof HTMLElement && node.tagName === "TD") {
        const maybeTable = (node as HTMLElement).closest("table");
        if (maybeTable) return maybeTable as HTMLTableElement;
      }
      node = node.parentNode;
    }
    return null;
  }

  function addRow() {
    const table = getClosestTableFromSelection();
    if (!table) return alert("Place caret inside a table cell first.");
    const rows = table.rows;
    const refRowIndex = (window.getSelection()?.anchorNode as HTMLElement | null)?.closest?.("tr")?.rowIndex ?? rows.length - 1;
    const cols = rows[0]?.cells.length || 1;
    const newRow = table.insertRow(refRowIndex + 1);
    for (let i = 0; i < cols; i++) {
      const td = newRow.insertCell();
      td.innerHTML = "&nbsp;";
    }
  }

  function addColumn() {
    const table = getClosestTableFromSelection();
    if (!table) return alert("Place caret inside a table cell first.");
    const selCell = (window.getSelection()?.anchorNode as HTMLElement | null)?.closest?.("td") as HTMLTableCellElement | null;
    const insertIndex = selCell ? selCell.cellIndex + 1 : (table.rows[0]?.cells.length ?? 0);
    for (let r = 0; r < table.rows.length; r++) {
      const row = table.rows[r];
      const cell = row.insertCell(insertIndex);
      cell.innerHTML = "&nbsp;";
    }
  }

  function removeRow() {
    const table = getClosestTableFromSelection();
    if (!table) return alert("Place caret inside a table cell first.");
    const selRow = (window.getSelection()?.anchorNode as HTMLElement | null)?.closest?.("tr") as HTMLTableRowElement | null;
    if (!selRow) return;
    if (table.rows.length <= 1) {
      // remove whole table instead
      table.remove();
      return;
    }
    table.deleteRow(selRow.rowIndex);
  }

  function removeColumn() {
    const table = getClosestTableFromSelection();
    if (!table) return alert("Place caret inside a table cell first.");
    const selCell = (window.getSelection()?.anchorNode as HTMLElement | null)?.closest?.("td") as HTMLTableCellElement | null;
    if (!selCell) return;
    const idx = selCell.cellIndex;
    for (let r = table.rows.length - 1; r >= 0; r--) {
      const row = table.rows[r];
      if (row.cells[idx]) row.deleteCell(idx);
    }
  }

  function deleteTable() {
    const table = getClosestTableFromSelection();
    if (!table) return alert("Place caret inside a table cell first.");
    table.remove();
  }

  /* ---- Undo / Redo ---- */
  function undo() {
    const editor = getEditor();
    editor && editor.history && editor.history.undo();
  }
  function redo() {
    const editor = getEditor();
    editor && editor.history && editor.history.redo();
  }

  /* ---- Simple chart insertion:
      Prompts user for labels and values (comma-separated), draws a simple bar chart
      onto a canvas, converts to dataURL and inserts as image.
  */
  function insertChart() {
    const labelsInput = prompt("Chart labels (comma separated), e.g. Jan,Feb,Mar");
    if (!labelsInput) return;
    const valuesInput = prompt("Chart values (comma separated), e.g. 10,20,30");
    if (!valuesInput) return;
    const labels = labelsInput.split(",").map(s => s.trim());
    const values = valuesInput.split(",").map(s => parseFloat(s.trim()) || 0);

    const canvas = document.createElement("canvas");
    canvas.width = 700;
    canvas.height = 380;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // simple axes & bars
    const padding = 60;
    const chartW = canvas.width - padding * 2;
    const chartH = canvas.height - padding * 2;
    const maxVal = Math.max(...values, 1);
    const barW = chartW / values.length * 0.6;
    for (let i = 0; i < values.length; i++) {
      const x = padding + (i + 0.2) * (chartW / values.length);
      const h = (values[i] / maxVal) * chartH;
      const y = canvas.height - padding - h;
      ctx.fillStyle = "#3b82f6";
      ctx.fillRect(x, y, barW, h);
      // labels
      ctx.fillStyle = "#333";
      ctx.font = "14px Arial";
      ctx.fillText(labels[i] || "", x, canvas.height - padding + 18);
      // value on top
      ctx.fillText(String(values[i]), x, y - 6);
    }

    // axis line
    ctx.strokeStyle = "#333";
    ctx.beginPath();
    ctx.moveTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.stroke();

    const dataUrl = canvas.toDataURL("image/png");
    const editor = getEditor();
    if (!editor) return;
    const range = editor.getSelection() || { index: editor.getLength(), length: 0 };
    editor.insertEmbed(range.index, "image", dataUrl);
    editor.setSelection(range.index + 1);
  }

  /* ---- Insert symbol ---- */
  function insertSymbol(symbol: string) {
    const editor = getEditor();
    if (!editor) return;
    const range = editor.getSelection() || { index: editor.getLength(), length: 0 };
    editor.insertText(range.index, symbol);
    editor.setSelection(range.index + 1);
    editor.focus();
  }

  useEffect(() => {
    // ensure font/size are applied when changed
    const editor = getEditor();
    if (!editor) return;
    editor.format("size", fontSize);
    editor.format("font", fontFamily);
  }, [fontSize, fontFamily]);

  

  return (
    <div className="editor-container">
      {/* Ribbon Tabs */}
      <div className="ribbon-tabs">
        <button className={`ribbon-tab ${activeTab==="home" ? "active" : ""}`} onClick={() => setActiveTab("home")}>Home</button>
        <button className={`ribbon-tab ${activeTab==="insert" ? "active" : ""}`} onClick={() => setActiveTab("insert")}>Insert</button>
        <button className={`ribbon-tab ${activeTab==="layout" ? "active" : ""}`} onClick={() => setActiveTab("layout")}>Layout</button>

        {/* history buttons aligned right */}
        <div style={{ marginLeft: "auto", display: "flex", gap: 8, alignItems: "center", paddingRight: 8 }}>
          <button className="ribbon-small" onClick={undo} title="Undo"><FaUndo /></button>
          <button className="ribbon-small" onClick={redo} title="Redo"><FaRedo /></button>
        </div>
      </div>

      {/* Ribbon Content */}
      <div className="ribbon-content">
        {activeTab === "home" && (
          <>
            <div className="ribbon-group">
              <button onClick={() => applyFormat("bold", true)} title="Bold"><FaBold /></button>
              <button onClick={() => applyFormat("italic", true)} title="Italic"><FaItalic /></button>
              <button onClick={() => applyFormat("underline", true)} title="Underline"><FaUnderline /></button>
            </div>

            <div className="ribbon-group">
              <label className="ribbon-label">Font</label>
              <select className="ribbon-select" value={fontFamily} onChange={(e) => { setFontFamily(e.target.value); applyFormat("font", e.target.value); }}>
                <option value="arial">Arial</option>
                <option value="georgia">Georgia</option>
                <option value="times-new">Times New Roman</option>
                <option value="courier-new">Courier New</option>
                <option value="tahoma">Tahoma</option>
                <option value="verdana">Verdana</option>
              </select>
            </div>

            <div className="ribbon-group">
              <label className="ribbon-label">Size</label>
              <select className="ribbon-select" value={fontSize} onChange={(e) => { setFontSize(e.target.value); applyFormat("size", e.target.value); }}>
                <option value="12px">12</option>
                <option value="14px">14</option>
                <option value="16px">16</option>
                <option value="18px">18</option>
                <option value="20px">20</option>
                <option value="22px">22</option>
                <option value="24px">24</option>
                <option value="26px">26</option>
                <option value="28px">28</option>
                <option value="30px">30</option>
              </select>
            </div>

            <div className="ribbon-group">
              <label className="ribbon-label">Color</label>
              <input type="color" onChange={(e) => applyFormat("color", e.target.value)} />
            </div>

            <div className="ribbon-group">
              <button onClick={() => applyFormat("align", "")} title="Left"><FaAlignLeft /></button>
              <button onClick={() => applyFormat("align", "center")} title="Center"><FaAlignCenter /></button>
              <button onClick={() => applyFormat("align", "right")} title="Right"><FaAlignRight /></button>
              <button onClick={() => applyFormat("list", "bullet")} title="Bulleted list"><FaListUl /></button>
              <button onClick={() => applyFormat("list", "ordered")} title="Numbered list"><FaListOl /></button>
            </div>

            <div className="ribbon-group">
              <label className="ribbon-label">Symbols</label>
              <select className="ribbon-select" onChange={(e) => { if (e.target.value) { insertSymbol(e.target.value); e.currentTarget.value = ""; } }}>
                <option value="">Insert symbol...</option>
                <option value="©">© Copyright</option>
                <option value="®">® Registered</option>
                <option value="™">™ Trademark</option>
                <option value="±">± Plus/minus</option>
                <option value="°">° Degree</option>
                <option value="×">× Multiply</option>
                <option value="÷">÷ Divide</option>
                <option value="•">• Bullet</option>
                <option value="—">— Em dash</option>
                <option value="…">… Ellipsis</option>
              </select>
            </div>
          </>
        )}

        {activeTab === "insert" && (
          <>
            <div className="ribbon-group">
              <button onClick={() => fileInputRef.current?.click()} title="Upload image"><FaImage /> Upload</button>
              <input ref={fileInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={onFileChange} />
              <button onClick={insertImageFromUrl} title="Insert image by URL"><FaImage /> From URL</button>
              <button onClick={insertLink} title="Insert link"><FaLink /> Link</button>
            </div>

            <div className="ribbon-group">
              <label className="ribbon-label">Table</label>
              <button onClick={() => insertTable(2,2)} title="Insert table"><FaTable /> Insert</button>
              <button onClick={addRow} title="Add row">+ Row</button>
              <button onClick={addColumn} title="Add column">+ Col</button>
              <button onClick={removeRow} title="Remove row">- Row</button>
              <button onClick={removeColumn} title="Remove column">- Col</button>
              <button onClick={deleteTable} title="Delete table">Delete</button>
            </div>

            <div className="ribbon-group">
              <button onClick={insertChart} title="Insert chart"><FaChartBar /> Chart</button>
            </div>
          </>
        )}

        {activeTab === "layout" && (
          <>
            <div className="ribbon-group">
              <button onClick={() => applyFormat("header", 1)}>H1</button>
              <button onClick={() => applyFormat("header", 2)}>H2</button>
              <button onClick={() => applyFormat("header", 3)}>H3</button>
            </div>

            <div className="ribbon-group">
              <label className="ribbon-label">Spacing</label>
              <select className="ribbon-select" onChange={(e) => applyFormat("block", e.target.value)}>
                <option value="">Normal</option>
                <option value="1.15">1.15</option>
                <option value="1.5">1.5</option>
                <option value="2">2.0</option>
              </select>
            </div>
          </>
        )}
      </div>

      {/* Editor */}
      <ReactQuill
        ref={quillRef}
        theme="snow"
        // value={editorContent}
        onChange={setEditorContent}
        modules={{ toolbar: false, history: { delay: 1000, maxStack: 100 } }}
        formats={[
          "bold","italic","underline","strike","list","bullet","indent","link","image",
          "header","align","size","color","font"
        ]}
        className="text-editor"
      />
    </div>
  );
}

export default WordLikeEditor;