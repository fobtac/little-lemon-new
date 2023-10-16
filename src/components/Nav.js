import React from "react";
import Logo from 'M:/front_end_development/code/little-lemon/little-lemon-app/src/assets/images/Logo.svg'
import './styles/Nav.css'


const Nav = () => {
    return (
        <nav class="nav">
            <ul>
            <img class="item item-2" src={Logo} alt="Little Lemon Logo"></img>
                <li>
                    <a href="/HomePage">home</a>
                </li>
                <li>
                     <a href="/AboutPage">about</a>
                </li>
                <li>
                    <a href="/MenuPage">menu</a>
                </li>
                <li>
                    <a href="/ReservationsPage">reservations</a>
                </li>
                <li>
                    <a href="/OrderOnlinePage">order online</a>
                </li>
                <li>
                    <a href="/LoginPage">login</a>
                </li>
            </ul>
        </nav>
    );
};

export {Nav};