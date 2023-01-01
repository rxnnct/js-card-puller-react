import React, {useContext} from "react";
import style from './ControlPanel.module.scss';
import {WorkSpacePageContext} from "../WorkspacePage";

const ControlPanel = () => {

    const {newDeckCardNumber, updateNewDeckCardNumber, pullCard, generateDeck} = useContext(WorkSpacePageContext);

    const onNewDeckCardNumber = (e) => {
        const text = e.target.value;
        updateNewDeckCardNumber(text);
    }

    const onPullCard = () => {
        pullCard();
    }

    const onGenerateDeck = () => {
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