import Inventory from "./Components/Inventory"
import "./styles/App.css"
import Shop from "./Components/Shop"
import Home from "./Components/Home"
import Cart from "./Components/Cart"
import Product from "./Components/Product"
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App(){
  const [items, setItems] = useState([])

  function addItemToCart(item){
    checkForDuplicates(item)
  }

  function checkForDuplicates(item){
    let tempArray = items;
    items.some(e => {
      if(e.itemId === item.itemId && e.count){
        tempArray[tempArray.indexOf(e)].count++
        setItems([...tempArray])
        return true
      }
    })
    if(items.filter(e => e.itemId === item.itemId).length < 1){
      item.count = 1
      setItems([...items, item])
    }
  }

  function setItemCount(item, number, add){
    let tempArray = items;
    let index = items.indexOf(item);
    if(items.some(e => { return e.itemId === item.itemId})){
      if(number > 0 && add === undefined){
        tempArray[index].count = number;
      }
      else if(number > 0 && add){
        tempArray[index].count = tempArray[index].count + parseInt(number);
      }
      else if(number <= 0){
        tempArray.splice(index, 1)
      }
    }
    else{
      item.count = number;
      tempArray = [...tempArray, item]
    }
    setItems([...tempArray])
  }

  return (
    <div className="appContainer">
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home inventory = {Inventory}  items={items} />} />
        <Route path="/shop" exact element={<Shop inventory = {Inventory} items={items} addItemToCart = {addItemToCart} />} />
        <Route path="/cart" exact element={<Cart inventory = {Inventory} items = {items} setItemCount = {setItemCount}/>} />
        <Route path="/shop/:id" element={<Product inventory={Inventory} items={items} setItemCount = {setItemCount}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App