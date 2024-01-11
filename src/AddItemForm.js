import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";
const AddItemForm = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="AddForm">Add item</label>
      <input
        autoFocus
        ref={inputRef}
        type="text"
        id="AddForm"
        placeholder="Add item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItemForm;
