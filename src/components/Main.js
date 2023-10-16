import React from "react";
import LemonDessert from 'M:/front_end_development/code/little-lemon/little-lemon-app/src/assets/images/lemon dessert.jpg'
import './styles/Main.css'

function Main() {
    return (
        <div className="Main">
            <img class="item item-6" src={LemonDessert} alt="Little Lemon Dessert"></img>
        </div>
    );
};

export {Main};