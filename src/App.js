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
    setItems([...items, item])
  }

  function checkForDuplicates(item){
    // items.forEach(e => {
    //   if(item.itemId == e.itemId){
    //     console.log(e)
    //   }
    // })

    if(items.filter(e => e.itemId === item.itemId).length > 0){
      console.log("Has")
    }
    else if(!items.filter(e => e.itemId === item.itemId).length > 0){
      console.log(item)
    }
    // console.log(items.filter( e => e.itemId === item.itemId))
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