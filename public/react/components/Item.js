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

        <div id="itemContainer">
          <h3 id="itemTitle">{item.title}</h3>
          <img id="itemImage" src={item.image} alt={item.title} />
          <p id="itemPrice">{item.price}</p>
          <p id="itemDescription">{item.description}</p>
          <button onClick={!isSinglePageView ? handleItemClick : handleBackButton}>{!isSinglePageView ? `Go to item` : 'Back To List'}</button>
        </div> 
    
    </>
} 