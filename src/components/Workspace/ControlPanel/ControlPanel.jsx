import React, {useContext} from "react";
import style from './ControlPanel.module.scss';
import {WorkSpaceContext} from "../Workspace";

const ControlPanel = () => {

    const {newDeckCardNumber, updateNewDeckCardNumber, pullCard, generateDeck} = useContext(WorkSpaceContext);

    let onNewDeckCardNumber = (e) => {
        let text = e.target.value;
        updateNewDeckCardNumber(text);
    }

    let onPullCard = () => {
        pullCard();
    }

    let onGenerateDeck = () => {
        generateDeck();
    }

    return (
        <div className={style.controlPanel}>
            <input className={style.cardsNumberInput} onChange={onNewDeckCardNumber} type="number"
                   value={newDeckCardNumber} placeholder="How many?"/>
            <button className={style.generateButton} onClick={onGenerateDeck}>Go!</button>
            <button className={style.pullButton} onClick={onPullCard}>Pull</button>
        </div>
    );
}

export default ControlPanel;