import React from 'react';

export const Item = ({item, isSinglePageView, setSinglePageView, setItemObjectTitle}) => {

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
    <button onClick={!isSinglePageView ? handleItemClick : handleBackButton}>{!isSinglePageView ? `Go to item` : 'Back To List'}</button>
    <UpdateForm 
    isAddingItem={isAddingItem}
    setIsAddingItem={setIsAddingItem}
    items={items}
    setItems={setItems}
    newItem={newItem}
    setNewItem={setNewItem}
    fetchItems={fetchItems}
    />
  </>
} 