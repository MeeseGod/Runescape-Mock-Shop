import Navbar from "./Navbar"
import { useParams } from "react-router-dom"
import "../styles/Product.css"

export default function Product(props){
    const { id } = useParams();
    const item = props.inventory.find(e =>{
        return e.itemId === id
    })

    return(
        <div className="productContainer">
            <Navbar/>
            <div className="centerDisplay">
                <div className="itemDisplay">
                    <div className="productImageContainer">
                        <img className="productImage" src={item.image}/>
                    </div>
                    <div className="productInfoContainer">
                        <div className="productBasicInfo">
                            <div className="productName">{item.name}</div>
                            <div className="productPrice">{item.price} GP</div>
                        </div>
                        <div className="productInputContainer">
                            <div className="productItemCountSetters">
                                <button className="addProductCount">+</button>
                                <input type={"number"} className="productAddNumber" defaultValue={1} />
                                <button className="subtractProductCount">-</button>
                            </div>
                            <div className="productAddToCart">
                                <button className="addToCart">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}