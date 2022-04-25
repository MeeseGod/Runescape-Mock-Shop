import Navbar from "./Navbar"
import "../styles/Home.css"
import React, { useEffect, useState } from "react";

export default function Home(props){
    return(
        <div className="homeContainer">
            <Navbar/>
            <div className="homeDisplay">
                <div className="homeBanner">
                    Check Out Our Latest Items!
                </div>
                <div className="homeItemDisplay">
                    <div>
                        <button>{"<"}</button>
                    </div>
                    <div className="itemHotlink">
                    </div>
                    <div>
                        <button>{">"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}