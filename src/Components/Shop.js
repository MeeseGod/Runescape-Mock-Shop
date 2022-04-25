import Navbar from "./Navbar";
import {Link} from "react-router-dom"
import "../styles/Shop.css"
import React, { useEffect, useState } from "react";

export default function Shop(props){

  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])

  function getItem(item){
    props.addItemToCart(item)
  }

  function filterItems(search){
    console.log(filteredItems)
    let tempArray = items.filter((e) => {
      return e.name.toLowerCase().includes(search.toLowerCase()) || e.category.includes(search.toLowerCase())
    })
    if(search !== ""){
      setFilteredItems([...tempArray])
    }
    else{
      setFilteredItems([...items])
    }
  }

  useEffect(() => {
      setItems(props.items)
      setFilteredItems(props.items)
    }, []
  )

  return(
      <div className="shopContainer">
        <Navbar/>
        <div className="narrowSearchContainer">
          <input type={"text"} onChange={(e) => filterItems(e.target.value)} className="narrowSearchInput"/>
        </div>
          <div className="shopItemDisplay">
            {filteredItems.map((item) => {
              return <div className="productDiv" key={item.name}>
                <Link to={`/shop/${item.itemId}`} className="productLink">
                  <div className="shopImageContainer">
                    <img src={item.image} className="shopItemImage"/>
                  </div>
                  <div className="productInfo">
                    <div>{item.name}</div>
                    <div>Price: {item.price}gp</div>
                  </div>
                </Link> 
                <button className="shopItemButton" onClick={() => getItem(item)}>Add to Cart</button>
              </div>
            })}
          </div>
      </div>
  )
}