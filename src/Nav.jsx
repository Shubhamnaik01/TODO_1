import React from "react";
import "./CSS/nav.css"

const Nav = () =>{
    return (
        <div>
            <nav className="top_nav">
                <h1 className="nav_h1">TODO</h1>
                <ul className="nav_litems">
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact US</li>
                    <li>Features</li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;