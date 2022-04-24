import React from "react";
import Navbar from "./Navbar";
import "../styles/Cart.css"

export default function Cart(props){

  function placeHolder(){
    console.log(props.items)
  }

  return <div className="cartContainer">
    <Navbar/>
    <div className="itemsContainer">
      {props.items.map((item) => {
        return <div className="cartItem" key={item.name}>
          <div className="itemInformation">
            <div className="imageContainer">
              <img className="itemImage" src={item.image} alt={`${item.name} from the game Runescape`}></img>
            </div>
            <div className="itemTextInfo">
              {item.name}
              <div className="itemCount">
                <button onClick={() => props.setItemCount(item, "add")}>^</button>
                  {item.count}
                <button onClick={() => props.setItemCount(item, "subtract")}>v</button>
              </div>
              {item.price * item.count}
            </div>
          </div>
        </div>
      })}
    </div>
    <button onClick={() => {placeHolder()} }>props.items</button>
  </div>
}