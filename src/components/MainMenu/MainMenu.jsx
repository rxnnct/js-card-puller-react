import React from 'react';
import style from './MainMenu.module.scss'
import {NavLink} from "react-router-dom";

const MainMenu = () => {
    return (
        <div className={style.mainMenu}>
            <NavLink to="/">App</NavLink>
            <NavLink to="/help">Help</NavLink>
        </div>
    );
}

export default MainMenu;