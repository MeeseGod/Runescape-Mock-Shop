import Navbar from "./Navbar";
import {Link} from "react-router-dom"

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
            <Link to={`/shop/${item.itemId}`}>
            {item.name}
            </Link> 
            <button onClick={() => getItem(item)}>Add to Cart</button>
          </div>
        })}
      </div>
      </div>
  )
}