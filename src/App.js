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
    setItems([...items, ...item])
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
      <Route path="/cart" exact element={<Cart items = {items}/>} />
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App