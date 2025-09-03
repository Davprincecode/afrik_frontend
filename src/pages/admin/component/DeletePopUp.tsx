import React from "react";


interface DeletePopupProps {
  isOpen: boolean;
  itemId: string | number; // or whatever type your ID is
  onCancel: () => void;
  onDelete: (id: string | number) => void;
}

const DeletePopup: React.FC<DeletePopupProps> = ({ isOpen, itemId, onCancel, onDelete }) => {
  return (
    <div className={`backdrop ${isOpen ? "show" : ""}`}>
      <div className={`popup-container ${isOpen ? "slide-in" : "slide-out"}`}>
        <p>Are you sure you want to delete?</p>
        <div className="button-group">
          <button className="cancel-btn" onClick={onCancel}>Cancel</button>
          <button className="delete-btn" onClick={() => onDelete(itemId)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
