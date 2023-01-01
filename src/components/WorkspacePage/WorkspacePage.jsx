import React, {createContext} from "react";
import style from './WorkspacePage.module.scss';
import ControlPanel from "./ControlPanel/ControlPanel";
import CardTable from "./CardTable/CardTable";

export const WorkSpacePageContext = createContext(null);

const WorkspacePage = (props) => {
    return (
        <div className={style.workspacePage}>
            <WorkSpacePageContext.Provider value={
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
            </WorkSpacePageContext.Provider>
        </div>
    );
}

export default WorkspacePage;