import React from "react";
import style from './Workspace.module.scss';
import ControlPanel from "./ControlPanel/ControlPanel";

const Header = () => {
    return (
        <div className={style.workspace}>
            <ControlPanel />
        </div>
    );
}

export default Header;