import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleCheckBox, handleDelete }) => {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        checked={item.checked}
        onClick={() => handleCheckBox(item.id)}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheckBox(item.id)}
      >
        {item.item}
      </label>
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
        aria-level={`delete${item.item}`}
      />
    </li>
  );
};

export default LineItem;
