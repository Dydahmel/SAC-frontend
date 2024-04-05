import React from "react";
import "./Main.css";
import MyCalendar from "../Calendar/Calendar";



function Main(){
    return(
        <div className="main">
            Main
            component
            <button type="text" className="main__book-btn">
                Book-A-Class
            </button>
            <div>
                <MyCalendar>

                </MyCalendar>
            </div>
        </div>
    )
}

export default Main