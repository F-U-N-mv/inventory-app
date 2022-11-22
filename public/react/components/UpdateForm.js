import React, {useState} from "react";
import apiURL from "../api";


export function updateForm({items, newItem, setNewItem, isAddingItem, setIsAddingItem, fetchItems}) {


   // Update the item, should work for all 
  const handleUpdate = async (id) => {
    const res = await fetch(`${apiURL}/items/${props.item.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        title: '',
        price: '',
        description: '',
        category: '',
        image: ''

      })
    });
    const updateItem = await res.json();
    setNewItem(updateItem);
  };

  const handleUpdateSubmit = (ev) => {
    ev.preventDefault();
    handleUpdate(newItem);
    setNewItem({
      title: "",
      price: "",
      description: "", 
      category: "",
      image: ""
    });
  };

  const handleDelete = async () => {
    const response = await fetch(`${apiURL}/items/${props.item.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const deleteItem = await response.json()
    // setNewItem(deleteItem);
    setIsAddingItem(false);
  };


  return (
    <>
    <form onSubmit={handleUpdateSubmit}>
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
<button onClick={() => handleDelete()}>Delete Item</button> 
    </>
  )
}

