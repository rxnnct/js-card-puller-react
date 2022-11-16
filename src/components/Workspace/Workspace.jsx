import React from "react";
import style from './Workspace.module.scss';
import ControlPanel from "./ControlPanel/ControlPanel";
import CardTable from "./CardTable/CardTable";
import ControlPanelContainer from "./ControlPanel/ControlPanelContainer";

const Header = (props) => {
    return (
        <div className={style.workspace}>
            <ControlPanelContainer store={props.store}/>
            <CardTable store={props.store}/>
        </div>
    );
}

export default Header;