import React from "react";
import style from './Workspace.module.scss';
import ControlPanelContainer from "./ControlPanel/ControlPanelContainer";
import CardTableContainer from "./CardTable/CardTableContainer";

const Header = (props) => {
    return (
        <div className={style.workspace}>
            <ControlPanelContainer store={props.store}/>
            <CardTableContainer store={props.store}/>
        </div>
    );
}

export default Header;