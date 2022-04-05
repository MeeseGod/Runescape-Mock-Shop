import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Cart(props){

  const [cartItems, setCartItems] = useState();
  const [cartArray, setCartArray] = useState([]);
  let keyCounter = 0;

  function sortThroughItems(){
    let counts = {};

    props.items.forEach(function(x){
      counts[x.itemId] = (counts[x.itemId] || 0) + 1;
      }
    );
   setCartItems(counts)

  }

  function updateCartArray(){
    // Get counts from sortThroughItems
    // Split object into multiple objects via for each
    // Place each object into array (each object contains item code and number)
    // Retrieve item via item code from Inventory and display said item w/ the number of said items in cart
    // ez pz
  }

  useEffect(() =>{
      sortThroughItems()
      updateCartArray()
    }, []
  )
    return <div id="cartContainer">
        <Navbar/>
        {props.items.map((item) => {
          keyCounter = keyCounter + 1
          return <div className="cartItemDiv" key={keyCounter}> 
            {item.name}
            <button onClick={()=>{console.log(cartItems)}}>Ahhh</button>
          </div>
        })}
    </div>
}