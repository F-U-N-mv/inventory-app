import React from 'react';
import { Item } from './Item';

export const ItemsList = ({items, isSinglePageView, setSinglePageView, itemObjectTitle, setItemObjectTitle}) => {

  return (
    <>
      {
        isSinglePageView
        ? items.filter(item => item.title === itemObjectTitle).map((item1, idx) =>
            <Item item={item1} key={idx} setItemObjectTitle={setItemObjectTitle} isSinglePageView={isSinglePageView} setSinglePageView={setSinglePageView}/>
          )
        : items.map((item, idx) => <Item item={item} key={idx} setItemObjectTitle={setItemObjectTitle} isSinglePageView={isSinglePageView} setSinglePageView={setSinglePageView}/>)
      }
    </>
  )
}
