import {Link} from "react-router-dom"
import "../styles/Navbar.css"

export default function Navbar(){
    return(
        <div className="navbar">
            <img className="navbarImg" src="https://oldschool.runescape.wiki/images/thumb/Blue_wizard_hat_detail.png/1200px-Blue_wizard_hat_detail.png?55f7d"></img>
            <Link to="/" className="navbarLink">Home</Link>
            <Link to="/shop" className="navbarLink">Shop</Link>
            <Link to="/cart" className="navbarLink">Cart</Link>
            <div className="titlePositioner">
                <div className="titleContainer">
                    MeeseGod's Blackmarket
                </div>
            </div>
        </div>
    )
}