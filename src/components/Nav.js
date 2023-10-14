import React from "react";
import Logo from 'M:/front_end_development/code/little-lemon/little-lemon-app/src/assets/images/Logo.svg'

const Nav = () => {
    return (
        <nav class="container">
            <ul>
            <img class="item item-2" src={Logo} alt="Little Lemon Logo"></img>
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
        </nav>
    );
};

export {Nav};