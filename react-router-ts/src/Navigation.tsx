import * as React from "react";
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <NavLink to="/">Home</NavLink> | 
            <NavLink to="/contact">Contact</NavLink> | 
            <NavLink to="/about">About</NavLink>
        </div>
    );
}

export default Navigation;
