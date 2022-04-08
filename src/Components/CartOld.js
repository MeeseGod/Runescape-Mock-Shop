import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Cart(props){

  const [cartItems, setCartItems] = useState([]);
  let keyCounter = 0;

  function countItems(){
    let itemCounts = {};
    console.log(props.items)
    props.items.forEach(function(x){
      itemCounts[x.itemId] = (itemCounts[x.itemId] || 0) + 1;
      }
    );
    updateCartArray(itemCounts)
  }

  function updateCartArray(itemCounts){
    let newArray = [];
    for(const property in itemCounts){
      console.log(itemCounts)
      let tempObject = {[property] : itemCounts[property]}
      newArray = [...newArray, tempObject]
    }
    setCartItems(newArray)
  }

  useEffect(() =>{
      countItems()
    }, []
  )

  return <div id="cartContainer">
    <Navbar/>
      {cartItems.map((item, index) => {
        keyCounter = keyCounter + 1
        return <div className="cartItemDiv" key={keyCounter}> 
        </div>
      })}
    <button onClick={()=>{console.log(cartItems)}}>Ahhh</button>
  </div>
}