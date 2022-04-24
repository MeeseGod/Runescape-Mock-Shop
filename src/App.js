import Inventory from "./Components/Inventory"
import "./styles/App.css"
import Shop from "./Components/Shop"
import Home from "./Components/Home"
import Cart from "./Components/Cart"
import Product from "./Components/Product"
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App(){
  const [items, setItems] = useState([])

  function addItemToCart(item){
    checkForDuplicates(item)
  }

  function checkForDuplicates(item){
    items.some(e => {
      if(e.itemId === item.itemId && e.count){
        e.count++
        return
      }
    })
    if(items.filter(e => e.itemId === item.itemId).length < 1){
      item.count = 1
      setItems([...items, item])
    }
  }

  function setItemCount(item, mode){
    let tempArray = items;
    let index = items.indexOf(item);
    if(mode==="add"){
      tempArray[index].count++
    }
    else if(mode==="subtract" && tempArray[index].count > 1){
      tempArray[index].count--
    }
    else if(mode==="subtract" && tempArray[index].count <= 1){
      tempArray.splice(tempArray[index], 1)
    }
    setItems([...tempArray])
  }

  useEffect(() => {
    console.log(items)
    }
  )

  return (
  <div className="appContainer">
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/shop" exact element={<Shop items = {Inventory} addItemToCart = {addItemToCart}/>} />
      <Route path="/cart" exact element={<Cart inventory = {Inventory} items = {items} setItemCount = {setItemCount}/>} />
      <Route path="/shop/:id" element={<Product inventory={Inventory} addItemToCart = {addItemToCart}/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App