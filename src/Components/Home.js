import Navbar from "./Navbar"
import "../styles/Home.css"

export default function Home(props){
    return(
        <div className="homeContainer">
            <Navbar items={props.items}/>
            <div className="homeDisplay">
                <div className="topLeftContainer">
                    <div className="topLeft">
                        <h1 className="homeHeader">MeeseGod's Black Market</h1>
                        <img className="dancing" alt="A dancing default character from OSRS" src="https://i.imgur.com/E1O7mVF.gif"></img>
                    </div>
                </div>
                <div className="homeTextInfo">
                    <h2>Welcome to the Black Market</h2>
                    <span>MeeseGod's Black Market is the number one OSRS marketplace around.
                        We've got Dragon Claws. We've got Death Runes. We've got that rune set you wanted when you were 12 but never got!
                    </span>
                    <span>
                        All you've got to do is pay up the GP through our <s>seedy</s> reliable credit exchange and you'll be leaving in 
                    new gear!
                    </span>
                </div>
            </div>
        </div>
    )
}