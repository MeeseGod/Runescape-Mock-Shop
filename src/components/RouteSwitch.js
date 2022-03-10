import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App"
import Checkout from "./Checkout"
import ShoppingCart from "./ShoppingCart"

const RouteSwitch = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<App/>} />
                <Route path="/checkout" exact element={<App path="Checkout"/>} />
                <Route path="/shoppingCart" exact element={<ShoppingCart/>} />
                <Route path="/shop" exact element={<App path="Shop"/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;