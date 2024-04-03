import React from "react";
import "./Header.css";
import headerBackgound from "../../images/header-background-1.jpg"


function Header(){
    return(
        <div className="header">
            
            <button type="text" className="header__button login__btn">Log in</button>
            <button type="text" className="header__button signin__btn">Sign in</button>
            <img className="header__background" src={headerBackgound} alt="header-backgound">                
            </img>
            HEADER
        </div>
    )
}

export default Header;