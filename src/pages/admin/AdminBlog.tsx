import React, { useState } from 'react'

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';

const theme = {
  paragraph: 'editor-paragraph',
  text: {
    bold: 'editor-bold',
    italic: 'editor-italic',
    underline: 'editor-underline',
  },
};

const editorConfig = {
  namespace: 'BlogEditor',
  theme,
  onError(error: any) {
    console.error('Lexical error:', error);
  },
  nodes: [],
};





function AdminBlog() {


 const [content, setContent] = useState('');

  const handleSubmit = () => {
    console.log('Blog content:', content);
    // You can send this to a backend or save it locally
  };

 return (
     <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<div className="editor-placeholder">Start writing your blog...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <AutoFocusPlugin />
      </div>
    </LexicalComposer>
  );


}

export default AdminBlog