import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import { Form } from "./Form";
//import {middleImage} from "https://img.freepik.com/premium-photo/sale-offer-black-friday-shopping-discount-closeup-woman-hand-holding-purchase-bags-isolated-orange-empty-space-background_279525-17960.jpg"
 
// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);
	const [isSinglePageView, setSinglePageView] = useState(false);
	const [itemObjectTitle, setItemObjectTitle] = useState('');
	const [isAddingItem, setIsAddingItem] = useState(false);
	
	
	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItems();
	}, []);
	
	return (
		<>
		<header> 
			<nav>
        		<ul>
            	<ul class="menu"><a href="/">Home</a></ul>
            	<ul class="menu"><a href="/">About Us</a></ul>
            	<ul class="menu"><a href="/">Where to Find</a></ul>
            	<ul class="menu"><a href="/">Cart</a></ul>
        		</ul>
    		</nav>
			<img class ="logo" src= {"https://cdn.shopify.com/s/files/1/0606/7663/6843/files/Original_size_Funshop_1_da4e7e2d-d7fc-46fb-94f7-3f5b8e6ee987_1200x1200.png"}></img>
		</header>
		<section id="middle-image"></section>
		
		<main id ="itemsContainer">	
			<ItemsList  items={items} isSinglePageView={isSinglePageView} setSinglePageView={setSinglePageView} itemObjectTitle={itemObjectTitle} setItemObjectTitle={setItemObjectTitle}/>

		</main>			
			<Form
			isAddingItem={isAddingItem}
        	setIsAddingItem={setIsAddingItem}
        	items={items}
        	setItems={setItems}
        	fetchItems={fetchItems}
			/>
		</>
	)
}
