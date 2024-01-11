// import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

function App() {
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

  const handleDelete = (id) => {
    const newItemList = items.filter((item) => item.id != id);
    setItems(newItemList);
    localStorage.setItem("shoppingList", JSON.stringify(newItemList));
  };
  return (
    <div className="App">
      <Header title="Glocery List" />
      <Content
        items={items}
        handleCheckBox={handleCheckBox}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
