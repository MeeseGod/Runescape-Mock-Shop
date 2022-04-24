import Navbar from "./Navbar"
import { useParams } from "react-router-dom"

export default function Product(props){
    const { id } = useParams();
    const item = props.inventory.find(e =>{
        return e.itemId === id
    })

    return(
        <div className="productContainer">
            <Navbar/>
            <div className="itemDisplay">
                {item.name}
            </div>
        </div>
    )
}