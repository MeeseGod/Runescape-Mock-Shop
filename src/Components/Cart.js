import React from "react";
import Navbar from "./Navbar";
import "../styles/Cart.css"

export default function Cart(props){

  function placeHolder(){
    console.log(props.items)
  }

  function handleCountChange(item, number){
    props.setItemCount(item, number)
  }


  if(props.items.length > 0){
  return <div className="cartContainer">
    <Navbar/>
    <div className="centerContainer">
      <div className="itemsContainer">
        {props.items.map((item) => {
          return <div className="cartItem" key={item.name}>
            <div className="cartItemInformation">
              <div className="imageContainer">
                <img className="cartItemImage" src={item.image} alt={`${item.name} from the game Runescape`}></img>
              </div>
              <div className="cartItemTextInfo">
                <div className="cartItemName">
                  {item.name}
                </div>
                <div className="priceAndCount">
                  {`${item.price * item.count}gp`}
                    <div className="itemCount">
                      <input type={"number"} defaultValue={item.count} min="0" max="99" onBlur={(e) => {
                          if(e.target.value > 99){e.target.value = 99}
                          handleCountChange(item, e.target.value)
                      }}/>
                    </div>
                </div>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
    <button onClick={() => {placeHolder()} }>props.items</button>
  </div>
  }
  else return <div className="cartContainer">
        <Navbar/>
        <div className="emptyCart">
          No items yet!
        </div>
  </div>
}