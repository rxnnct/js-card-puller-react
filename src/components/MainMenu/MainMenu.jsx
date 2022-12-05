import React from 'react';
import style from './MainMenu.module.css'
import {NavLink} from "react-router-dom";

const MainMenu = () => {
    return (
        <div>
            <NavLink to="/">App</NavLink>
            <NavLink to="/help">Help</NavLink>
        </div>
    );
}

export default MainMenu;