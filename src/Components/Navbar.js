import {Link} from "react-router-dom"
import React, { useEffect, useState } from "react";
import "../styles/Navbar.css"

export default function Navbar(props){
    const [cartCount, setCartCount] = useState(0)

    useEffect(() =>{
        function updateCount(){
            let counter = 0;
            props.items.forEach(item => {
                counter = counter + parseInt(item.count);
            });
            setCartCount(counter);
        }
        updateCount();
    }, [props.items])

    return(
        <div className="navbar">
            <img className="navbarImg" alt="A blue wizard hat from OSRS" src="https://oldschool.runescape.wiki/images/thumb/Blue_wizard_hat_detail.png/1200px-Blue_wizard_hat_detail.png?55f7d"></img>
            <Link to="/" className="navbarLink">Home</Link>
            <Link to="/shop" className="navbarLink">Shop</Link>
            <Link to="/cart" className="navbarLink">Cart({cartCount})</Link>
            <div className="titlePositioner">
                <div className="titleContainer">
                    MeeseGod's Black Market
                </div>
            </div>
        </div>
    )
}