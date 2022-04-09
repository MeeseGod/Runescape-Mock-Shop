import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";

export default function Shop(props){

  const [newId, setNewId] = useState(0)

  function getItem(item){
    sortThroughInventory(item);
  }

  function sortThroughInventory(id){
    let retrievedItem = props.items.filter(item => item.itemId === id)
    console.log(retrievedItem)
    props.addItemToCart(retrievedItem)
    console.log("sortThroughInventory")
  }

  function test(){
    console.log("test")
  }

  return(
      <div className="shopContainer">
      <Navbar/>
      <div className="shopItemsContainer">
        {props.items.map((item) => {
          return <div className="productDiv" key={item.name}> 
            {item.name}
            <button onClick={() => {getItem(item.itemId)}}>Add to Cart</button>
          </div>
        })}
      </div>
      </div>
  )
}