import Navbar from "./Navbar";
import {Link} from "react-router-dom"
import "../styles/Shop.css"

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
        <div className="narrowSearchContainer">
          <input type={"text"} className="narrowSearchInput"/>
        </div>
          <div className="shopItemDisplay">
            {props.items.map((item) => {
              return <div className="productDiv" key={item.name}>
                <Link to={`/shop/${item.itemId}`} className="productLink">
                  {/* <div className="shopImageContainer"> */}
                    <img src={item.image} className="shopItemImage"/>
                  {/* </div> */}
                  <div className="productInfo">
                    <div>{item.name}</div>
                    <div>Price: {item.price}gp</div>
                  </div>
                </Link> 
                <button onClick={() => getItem(item)}>Add to Cart</button>
              </div>
            })}
          </div>
      </div>
  )
}