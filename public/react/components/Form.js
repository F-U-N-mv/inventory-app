import React, {useState} from "react";
import apiURL from "../api";

export function Form({items, setItems, isAddingItem, setIsAddingItem, itemObjectTitle, setItemObjectTitle, fetchItems}) {

  const [newItem, setNewItem] = useState({
    title: "",
    price: "",
    description: "", 
    category: "",
    image: ""

  });

  const createNewItem = async (itemData) => {
    try {
      await fetch(`${apiURL}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData),
      });
      fetchItems();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    createNewItem(newItem);
    setNewItem({
      title: "",
      price: "",
      description: "", 
      category: "",
      image: ""
    });
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h2>Add a New Item</h2>
      <input
        value={newItem.title}
        onChange={(ev) => setNewItem({...newItem, title: ev.target.value})}
        placeholder="title"
        type="text"
        name="titles"
        required
      ></input>
      <br></br>
      <input
        value={newItem.price}
        onChange={(ev) => setNewItem({...newItem, price: ev.target.value})}
        placeholder="price"
        type="text"
        name="price"
        required
        ></input>
      <br></br>
      <input
        value={newItem.description}
        onChange={(ev) => setNewItem({...newItem, description: ev.target.value})}
        placeholder="description"
        type="text"
        name="description"
        required
        ></input>
      <br></br>
      <input
        value={newItem.category}
        onChange={(ev) => setNewItem({...newItem, category: ev.target.value})}
        placeholder="category"
        type="text"
        name="category"
        required
        ></input>
      <br></br>
      <input
        value={newItem.image}
        onChange={(ev) => setNewItem({...newItem, image: ev.target.value})}
        placeholder="image url"
        type="text"
        name="image"
        required
        ></input>
      <br></br>
      <button type="submit">Add New Item</button>
      <br></br>
</form>
    </>
  )
}