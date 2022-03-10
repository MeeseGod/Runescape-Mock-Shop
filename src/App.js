import React, {useState} from "react";
import { Link } from 'react-router-dom';
import "./styles/App.css";
import Navbar from "./components/Navbar"
import Checkout from "./components/Checkout";
import Shop from "./components/Shop";

function App(props) {
  const [cartItems, setCartItems] = useState([])

  return (
    <div className="App">
      <Navbar shoppingCartItems = {cartItems}/>
      {props.path == "Checkout" ? <Checkout/> : null}
      {props.path == "Shop" ? <Shop /> : null}
    </div>
  );
}

export default App;