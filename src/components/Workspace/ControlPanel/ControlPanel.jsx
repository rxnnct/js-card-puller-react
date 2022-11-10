import React from "react";
import style from './ControlPanel.module.scss';

const ControlPanel = () => {
    return (
        <div className={style.controlPanel}>
            <input className={style.cardsNumberInput} type="text" value="" placeholder="How many?" />
            <button className={style.generateButton}>Go!</button>
            <button className={style.pullButton}>Pull</button>
        </div>
    );
}

export default ControlPanel;