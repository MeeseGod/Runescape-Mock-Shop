import React, {useState} from "react";

function ShoppingCart(props){
    const [numberOfItems, setNumberOfItems] = useState(0);

    return(
        <div id="ShoppingCartContainer">
            Your Cart: {props.shoppingCartItems.length}
        </div>
    )
}

export default ShoppingCart