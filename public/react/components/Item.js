import React from 'react';
import {UpdateForm} from "./UpdateForm";

export const Item = ({item, items, isSinglePageView, setSinglePageView, newItem, setNewItem, setItemObjectTitle, isAddingItem, setIsAddingItem, fetchItems}) => {

  const handleItemClick = () => {
    setSinglePageView(!isSinglePageView);
    setItemObjectTitle(item.title);
  }

  const handleBackButton = async () => {
    setSinglePageView(!isSinglePageView);
  }

  return <>
    <h3>{item.title}</h3>
    <img src={item.image} alt={item.title} />
    <p>{item.price}</p>
    <p>{item.description}</p>
    {/* <UpdateForm 
    isAddingItem={isAddingItem}
    setIsAddingItem={setIsAddingItem}
    items={items}
    newItem={newItem}
    setNewItem={setNewItem}
    fetchItems={fetchItems}
    /> */}
    <button onClick={!isSinglePageView ? handleItemClick : handleBackButton}>{!isSinglePageView ? `Go to item` : 'Back To List'}</button>
  
  </>
} 