import React from "react";
import ItemList from "./ItemList";

const Main = ({ items, handleCheckBox, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheckBox={handleCheckBox}
          handleDelete={handleDelete}
        />
      ) : (
        "The list is empty"
      )}
    </main>
  );
};

export default Main;
