import Inventory from "./Components/Inventory"
import "./styles/App.css"
import Shop from "./Components/Shop"
import Home from "./Components/Home"
import Cart from "./Components/Cart"
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
        console.log(e)
        return
      }
    })
    if(items.filter(e => e.itemId === item.itemId).length < 1){
      item.count = 1
      setItems([...items, item])
    }
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
      <Route path="/cart" exact element={<Cart inventory = {Inventory} items = {items}/>} />
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App