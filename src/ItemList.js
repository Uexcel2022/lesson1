import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ItemList = ({ items, handleCheckBox, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <li className="item">
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
            aria-label={`Delete ${item.item}`}
          />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
