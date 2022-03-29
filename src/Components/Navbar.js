import {Link} from "react-router-dom"

export default function Navbar(){
    return(
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Your Cart</Link>
        </div>
    )
}