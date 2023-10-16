import React from "react";
import Logo from 'M:/front_end_development/code/little-lemon/little-lemon-app/src/assets/images/Logo.svg';
import './styles/Footer.css'

function Footer() {
    return (
        <footer class="footerContainer">
            <img class="item item-5" src={Logo} alt="Little Lemon Logo"></img>
                <div class="bottomNav">
                    <ul className="Doormat">doormat navigation
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