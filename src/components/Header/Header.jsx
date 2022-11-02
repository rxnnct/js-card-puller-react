import React from "react";
import style from './Header.module.scss';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <header className={style.header}>
            <img className={style.logo} src={logo} />
        </header>
    );
}

export default Header;