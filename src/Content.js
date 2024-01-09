import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Main = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      item: "PeakMilk",
      checked: false,
    },
    {
      id: 2,
      item: "DanaMilk",
      checked: false,
    },
    {
      id: 3,
      item: "LunaMilk",
      checked: false,
    },
  ]);

  const handleCheckBox = (id) => {
    const newItemList = items.map((item) =>
      item.id == id ? { ...item, checked: !item.checked } : item
    );
    setItems(newItemList);
    localStorage.setItem("shoppingList", JSON.stringify(newItemList));
  };

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onClick={() => handleCheckBox(item.id)}
            />
            <label onDoubleClick={() => handleCheckBox(item.id)}>
              {item.item}
            </label>
            <FaTrashAlt role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
