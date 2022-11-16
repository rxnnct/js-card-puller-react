import React from "react";
import style from './ControlPanel.module.scss';

const ControlPanel = (props) => {
    let newDeckCardNumber = props.newDeckCardNumber;

    let onNewDeckCardNumber = (e) => {
        let text = e.target.value;
        props.updateNewDeckCardNumber(text);
    }

    return (
        <div className={style.controlPanel}>
            <input className={style.cardsNumberInput} onChange={onNewDeckCardNumber} type="text" pattern="\d*"
                   value={newDeckCardNumber} placeholder="How many?"/>
            <button className={style.generateButton}>Go!</button>
            <button className={style.pullButton}>Pull</button>
        </div>
    );
}

export default ControlPanel;