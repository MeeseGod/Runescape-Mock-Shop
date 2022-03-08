import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App"
import Checkout from "./Checkout"

const RouteSwitch = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<App />} />
                <Route path="/checkout" exact element={<Checkout/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;