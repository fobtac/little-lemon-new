import React from "react";

function Nav() {
    return (
        <div className="Nav">
            <h1>nav here</h1>
            <ul>
                <li>
                    <a href="index.html">home</a>
                </li>
                <li>
                    <a href="about.html">about</a>
                </li>
                <li>
                    <a href="menu.html">menu</a>
                </li>
                <li>
                    <a href="reservations.html">reservations</a>
                </li>
                <li>
                    <a href="order-online.html">order online</a>
                </li>
                <li>
                    <a href="login.html">login</a>
                </li>
            </ul>
        </div>
    );
};

export {Nav};