import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";

export default function Shop(props){

  const [newId, setNewId] = useState(0)

  function getItem(bing){
    sortThroughInventory(bing.target.parentNode.dataset.itemid);
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

  function makeId(){
    setNewId(newId + 1)
    console.log(newId)
    return newId
  }

  return(
      <div className="shopContainer">
      <Navbar/>
      <div className="shopItemsContainer">
        {props.items.map((item) => {
          return <div className="productDiv" key={item.name} data-itemid={item.itemId}> 
            {item.name}
            <button onClick={getItem}>Add to Cart</button>
          </div>
        })}
      </div>
      </div>
  )
}