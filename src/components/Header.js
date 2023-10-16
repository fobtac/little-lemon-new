import React from "react";
import Chef from "M:/front_end_development/code/little-lemon/little-lemon-app/src/assets/images/restaurant chef B.jpg"
import './styles/Header.css'

const Header = () => {
    return (
        <header class="container">
        <img class="item item-4" src={Chef} alt="Little Lemon Chef" width="100em" height="100em"></img>
            <div class="item item-3">
                <h1>Little Lemon</h1>
                    <p class="p1">Chicago</p>
                    <p class="p2">Located in the Heart of Little Chicago, Little Lemon is tasty. Scooby Doo likes it.
                    There's even a TV hanging in the corner of the ceiling. One time I went and they were playing the Sopranos, it was pretty cool</p>
            </div>
            <button aria-label="On Click" type="button">Book a table</button>
        </header>
    );
};

export {Header};