const { Link } = require("react-router-dom");

function Navbar(){
    return(
        <div id="NavbarContainer">
            <Link to={"/checkout"}>
            <div>
                Checkout
            </div>
            </Link>
        </div>
    )
}

export default Navbar