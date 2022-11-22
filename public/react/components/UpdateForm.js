import React, {useState} from "react";
import apiURL from "../api";


export function updateForm({items, newItem, setNewItem, isAddingItem, setIsAddingItem, fetchItems}) {
   
  const [titleUpdate, setTitleUpdate] = useState(''); // state to update title
  const [priceUpdate, setPriceUpdate] = useState(''); // state to update price
  const [descUpdate, setDescUpdate] = useState('');// state to update description
  const [catUpdate, setCatUpdate] = useState(''); // state to update cateogry
  const [imgUpdate, setImgUpdate] = useState(''); //state to update the image


   // Update the item, should work for all 
  const handleUpdateSubmit = async (ev) => {
    ev.preventDefault();
    const updateItemInfo = {
      title: titleUpdate,
      price: priceUpdate,
      description: descUpdate,
      category: catUpdate,
      image: imgUpdate
    }
    const res = await fetch(`${apiURL}/items/${props.item.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        updateItemInfo

      })
    });
    const data = await res.json();
    setTitleUpdate(titleUpdate); //set updated title to title
    setPriceUpdate(priceUpdate); // set updated price to price
    setDescUpdate(descUpdate); // set updated description to desc
    setCatUpdate(catUpdate); // set updated category to category
    setImgUpdate(imgUpdate); // set image update to image 
  };

  // const handleUpdateSubmit = (ev) => {
  //   ev.preventDefault();
  //   handleUpdate(newItem);
  //   setNewItem({
  //     title: "",
  //     price: "",
  //     description: "", 
  //     category: "",
  //     image: ""
  //   });
  // };

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

