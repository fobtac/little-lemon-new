import React from "react";
import Logo from 'M:/front_end_development/code/little-lemon/little-lemon-app/src/assets/images/Logo.svg'

function Header() {
    return (
        <div className="Header">
            <h1>this is a header</h1>
            <img 
            src={Logo}
            alt="Logo" 
            />
        </div>
    );
};

export {Header};