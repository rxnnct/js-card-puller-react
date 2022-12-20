import React, {createContext} from "react";
import style from './Workspace.module.scss';
import ControlPanel from "./ControlPanel/ControlPanel";
import CardTable from "./CardTable/CardTable";

export const WorkSpaceContext = createContext(null);

const Workspace = (props) => {
    return (
        <div className={style.workspace}>
            <WorkSpaceContext.Provider value={
                {
                    newDeckCardNumber: props.newDeckCardNumber,
                    updateNewDeckCardNumber: props.updateNewDeckCardNumber,
                    pullCard: props.pullCard,
                    generateDeck: props.generateDeck,
                    deck: props.deck,
                    pulledCard: props.pulledCard
                }
            }>
                <ControlPanel/>
                <CardTable/>
            </WorkSpaceContext.Provider>
        </div>
    );
}

export default Workspace;