import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Cart(props){

  const [countedItems, setCountedItems] = useState([])

  function countDuplicates(){
    let itemCounts = {};
    props.items.forEach(function(x){
      itemCounts[x.itemId] = (itemCounts[x.itemId] || 0) + 1;
      }
    );
    console.log(itemCounts)
    displayCountedItems(itemCounts)
  }

  function displayCountedItems(itemCounts){
    for(const id in itemCounts){
      let tempObject = {}
      console.log(`${id}: ${itemCounts[id]}`)
      tempObject = {
        [id] : itemCounts[id]
      }
      console.log(props.items)
      console.log(tempObject)
      // I want to put every item count with their appropriate ID into seperate objects within an Array
      // Then pull prices from Inventory + name + ID and display this w/ count
      // Giving us the information needed to tally up the count
    }
  }

  return <div id="cartContainer">
    <Navbar/>
    <button onClick={() => {console.log(countDuplicates())} }>props.items</button>
  </div>
}