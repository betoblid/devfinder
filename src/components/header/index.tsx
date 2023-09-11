import React from "react"
import { Usercontextprops } from "../../context/backgrondContext";
import "./style.css"

function Header(){

    const {theme, functionSetTheme, searchtheme} = Usercontextprops()
    return(
        <header className={theme} id="container">
            <h1>
            DevFinder
            </h1>
            <button onClick={() => functionSetTheme()} className={searchtheme}>
                {theme === "dark" ? "dark" : "light"}
            </button>
        </header>
    )
}

export default Header;