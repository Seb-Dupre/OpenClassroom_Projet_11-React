import React, { useState, useEffect } from "react";
import "../styles/components/EditName.scss";
function EditName({
  currentUserName,
  firstName,
  lastName,
  onSave,
  onEditingChange,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewUserName] = useState(currentUserName || "");

  useEffect(() => {
    if (!isEditing) {
      setNewUserName(currentUserName || "");
    }
    if (onEditingChange) {
      onEditingChange(isEditing);
    }
  }, [isEditing, currentUserName, onEditingChange]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (newUserName.trim() === "") return;
    await onSave(newUserName);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewUserName(currentUserName || "");
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <button className="edit-button" onClick={handleEdit}>
        Edit Name
      </button>
    );
  }

  return (
    <div className="edit-name-form">
      <h2>Edit user info</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <div className="input-wrapper">
          <label htmlFor="username">User name</label>
          <input
            type="text"
            id="username"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="first-name">First name</label>
          <input type="text" id="first-name" value={firstName || ""} disabled />
        </div>
        <div className="input-wrapper">
          <label htmlFor="last-name">Last name</label>
          <input type="text" id="last-name" value={lastName || ""} disabled />
        </div>

        <div className="form-buttons">
          <button type="submit" className="save-button">
            Save
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditName;
