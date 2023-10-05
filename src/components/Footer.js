import React from "react";

function Footer() {
    return (
        <div className="Footer">
            <h1>this is a footer</h1>
            <ul>doormat nav
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
            <ul>contact
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
            <ul>socials
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
    );
};

export {Footer};