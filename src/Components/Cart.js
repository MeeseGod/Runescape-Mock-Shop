import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Cart(props){

  function placeHolder(){
    console.log(props.items)
  }

  return <div id="cartContainer">
    <Navbar/>
    <button onClick={() => {placeHolder()} }>props.items</button>
  </div>
}