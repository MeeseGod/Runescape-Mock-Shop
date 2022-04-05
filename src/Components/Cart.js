import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Cart(props){

  const [cartItems, setCartItems] = useState([]);
  let keyCounter = 0;

  function countItems(){
    let countedItems = {};
    props.items.forEach(function(x){
      countedItems[x.itemId] = (countedItems[x.itemId] || 0) + 1;
      }
    );
    updateCartArray(countedItems)
  }

  function updateCartArray(countedItems){
    let newArray = [];
    for(const property in countedItems){
      let tempObject = {[property] : countedItems[property]}
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
        {cartItems.map((item) => {
          keyCounter = keyCounter + 1
          return <div className="cartItemDiv" key={keyCounter}> 
            {item.name}
            <button onClick={()=>{console.log(cartItems)}}>Ahhh</button>
          </div>
        })}
        
    </div>
}