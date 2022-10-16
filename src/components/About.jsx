import React from "react"
import "./About.css"
import Data from "./Data"
import ScrollDown from "./ScrollDown"
import Social from "./Social"

export default function About(){

    return(
        <section className="home section">
            <div className="home_container container grid">
                <div className="home_content grid">
                    <Social />
            
                <div className="home_img"></div>
                    <Data/>
                </div>
                <ScrollDown/>
            </div>
        </section>
    )
}