import React from "react";
import "./Header.css";
import headerBackgound from "../../images/header-background-1.jpg"


function Header(){
    return(
        <div className="header">
            <div className="header__nav">
                <button type="text" className="header__button login__btn">Log in</button>
                <button type="text" className="header__button signin__btn">Sign in</button>
                {/* <button type="text" className="header__button signin__btn">Log out</button>
                <button type="text" className="header__button signin__btn">Book a class</button> */}
            </div>
            
            <img className="header__background" src={headerBackgound} alt="header-backgound">                
            </img>
            <div>Today is - DATE</div>
            HEADER
        </div>
    )
}

export default Header;