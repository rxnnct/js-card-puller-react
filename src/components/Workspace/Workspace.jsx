import React from "react";
import style from './Workspace.module.scss';
import ControlPanel from "./ControlPanel/ControlPanel";
import CardTable from "./CardTable/CardTable";

const Header = () => {
    return (
        <div className={style.workspace}>
            <ControlPanel />
            <CardTable />
        </div>
    );
}

export default Header;