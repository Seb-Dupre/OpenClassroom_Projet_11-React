import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName } from "../features/auth/authActions";

function EditName({ currentUserName, firstName, lastName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewUserName] = useState(currentUserName || "");

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  useEffect(() => {
    if (!isEditing) {
      setNewUserName(currentUserName || "");
    }
  }, [currentUserName, isEditing]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    await dispatch(updateUserName(newUserName));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewUserName(currentUserName || "");
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <button className="edit-button" onClick={handleEdit} disabled={loading}>
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
          if (!loading) handleSave();
        }}
      >
        <div className="input-wrapper">
          <label htmlFor="username">User name</label>
          <input
            type="text"
            id="username"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            disabled={loading}
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
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="form-buttons">
          <button
            type="submit"
            className="save-button"
            disabled={loading || newUserName.trim() === ""}
          >
            {loading ? "Saving..." : "Save"}
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={handleCancel}
            disabled={loading}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditName;
