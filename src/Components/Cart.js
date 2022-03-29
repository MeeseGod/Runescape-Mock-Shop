import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Cart(props){

  const [itemCount, setItemCount] = useState(0);
  let keyCounter = 0;

    return <div>
        <Navbar/>
        {props.items.map((item) => {
          keyCounter = keyCounter + 1
          return <div className="cartItemDiv" key={keyCounter}> 
            {item.name}
          </div>
        })}
    </div>
}