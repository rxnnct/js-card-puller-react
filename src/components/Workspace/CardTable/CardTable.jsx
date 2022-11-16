import React from "react";
import style from './CardTable.module.scss';
import Card from "./Card";

const CardTable = (props) => {

    let cardElements = props.cards.deck.map(c => <Card key={c} isPulled={false} text={c}/>);

    return (
        <div className={style.cardTable}>
            <Card isPulled={true} text={props.cards.pulledCard === undefined ? "" : props.cards.pulledCard}/>
            {cardElements}
        </div>
    );
}

export default CardTable;