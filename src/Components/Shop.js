import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";

export default function Shop(props){

  function getItem(item){
    props.addItemToCart(item)
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
            <button onClick={() => getItem(item)}>Add to Cart</button>
          </div>
        })}
      </div>
      </div>
  )
}