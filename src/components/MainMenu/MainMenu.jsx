import React from 'react';
import style from './MainMenu.module.scss'
import {NavLink} from "react-router-dom";

const MainMenu = () => {
    return (
        <div className={style.mainMenu}>
            <ul>
                <li><NavLink to="/">App</NavLink></li>
                <li><NavLink to="/help">Help</NavLink></li>
            </ul>
        </div>
    );
}

export default MainMenu;