import React from "react";
import Chef from "M:/front_end_development/code/little-lemon/little-lemon-app/src/assets/images/restaurant chef B.jpg"

const Header = () => {
    return (
        <header class="container">
        <img class="item item-4" src={Chef} alt="Little Lemon Chef" width="100em" height="100em"></img>
            <div class="item item-3">
                <h1>Little Lemon</h1>
                    <p class="p1">Chicago</p>
                    <p class="p2">Located in the Heart of Little Chicago, Little Lemon is tasty. Scooby Doo even likes it. It's so good, for real</p>
            </div>
            <button type="button">Book a table</button>
        </header>
    );
};

export {Header};