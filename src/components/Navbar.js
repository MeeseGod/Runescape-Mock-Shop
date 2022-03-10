import ShoppingCart from "./ShoppingCart";
const { Link } = require("react-router-dom");

function Navbar(props){
    return(
        <div id="NavbarContainer">
            <Link to={"/"}>
                <div className="navBarElement">
                    Home
                </div>
            </Link>
            <Link to={"/checkout"}>
                <div className="navBarElement">
                    <ShoppingCart shoppingCartItems = {props.shoppingCartItems}/>
                </div>
            </Link>
            <Link to={"/shop"}>
                <div className="navBarElement">Shop</div>
            </Link>
            <button onClick={ () => {console.log({props})}}></button>
        </div>
    )
}

export default Navbar