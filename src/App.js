// import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import AddItemForm from "./AddItemForm";
import SearchForItem from "./SearchForItem";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList"))
  );

  const saveChanges = (newItemList) => {
    setItems(newItemList);
    localStorage.setItem("shoppingList", JSON.stringify(newItemList));
  };

  const handleCheckBox = (id) => {
    const newItemList = items.map((item) =>
      item.id == id ? { ...item, checked: !item.checked } : item
    );
    saveChanges(newItemList);
  };

  const handleDelete = (id) => {
    const newItemList = items.filter((item) => item.id != id);
    saveChanges(newItemList);
  };

  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addNewItem(newItem);
    setNewItem("");
  };

  const addNewItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItemObject = {
      id,
      item,
      checked: false,
    };

    const newItemList = [...items, newItemObject];
    saveChanges(newItemList);
  };

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {};

  return (
    <div className="App">
      <Header title="Glocery List" />

      <AddItemForm
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <SearchForItem
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheckBox={handleCheckBox}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
