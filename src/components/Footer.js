import React from "react";
import Logo from 'M:/front_end_development/code/little-lemon/little-lemon-app/src/assets/images/Logo.svg';

function Footer() {
    return (
        <footer class="container">
        <div className="Footer">
        <img class="item item-5" src={Logo} alt="Little Lemon Logo"></img>
            <ul className="Doormat">doormat navigation
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
            <ul className="Contact">contact
                <li>
                    <a href="address.html">address</a>
                </li>
                <li>
                    <a href="phone-number.html">phone number</a>
                </li>
                <li>
                    <a href="email.html">email</a>
                </li>
            </ul>
            <ul className="Socials">socials
                <li>
                    <a href="http://www.youtube.com">youtube</a>
                </li>
                <li>
                    <a href="http://www.twitch.tv">twitch</a>
                </li>
                <li>
                    <a href="http://www.discord.gg">discord</a>
                </li>
                <li>
                    <a href="http://www.snapchat.com">snapchat</a>
                </li>
            </ul>
        </div>
        </footer>
    );
};

export {Footer};