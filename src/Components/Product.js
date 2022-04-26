import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import "../styles/Product.css";

export default function Product(props){
    const { id } = useParams();
    const item = props.inventory.find(e =>{
        return e.itemId === id;
    });
    const [productCount, setProductCount] = useState(1);

    function setItemCount(){
        props.setItemCount(item, productCount, true);
    };

    return(
        <div className="productContainer">
            <Navbar items={props.items}/>
            <div className="centerDisplay">
                <div className="itemDisplay">
                    <div className="productImageContainer">
                        <img className="productImage" src={item.image} alt={`${item.name} from OSRS`}/>
                    </div>
                    <div className="productInfoContainer">
                        <div className="productBasicInfo">
                            <div className="productName">{item.name}</div>
                            <div className="productPrice">{item.price} GP</div>
                        </div>
                        <div className="productInputContainer">
                            <div className="productItemCountSetters">
                                <input type={"number"} className="productAddNumber" defaultValue={1} min={1} onBlur={(e) => {
                                    if(e.target.value > 99){e.target.value = 99}
                                    setProductCount(e.target.value)
                                }}/>
                            </div>
                            <div className="productAddToCart">
                                <button className="addToCart" onClick={() => setItemCount()}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};