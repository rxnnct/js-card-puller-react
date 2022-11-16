import React from "react";
import style from './Workspace.module.scss';
import ControlPanel from "./ControlPanel/ControlPanel";
import CardTable from "./CardTable/CardTable";

const Workspace = (props) => {
    return (
        <div className={style.workspace}>
            <ControlPanel newDeckCardNumber={props.newDeckCardNumber}
                          updateNewDeckCardNumber={props.updateNewDeckCardNumber}/>
            <CardTable deck={props.deck} pulledCard={props.pulledCard}/>
        </div>
    );
}

export default Workspace;