import React from "react";
import style from "./HelpPage.module.scss";

const HelpPage = () => {
    return (
        <div className={style.helpPage}>
            <p>The application simulates drawing cards from a deck in random order.</p>
            <p>Now there is only one mode with numbered cards.</p>

            <p className={style.listHeader}>How to use:</p>
            <ol>
                <li>Choose the number of cards in the deck</li>
                <li>Click "GO!"</li>
                <li>Pull cards using the "Pull" button</li>
            </ol>
        </div>
    );
}

export default HelpPage;