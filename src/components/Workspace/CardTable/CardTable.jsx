import React, {useContext} from "react";
import style from './CardTable.module.scss';
import Card from "./Card";
import {WorkSpaceContext} from "../Workspace";

const CardTable = () => {

    const {deck, pulledCard} = useContext(WorkSpaceContext);

    let cardElements = deck.map(c => <Card key={c} isPulled={false} text={c}/>);

    return (
        <div className={style.cardTable}>
            <Card isPulled={true} text={pulledCard === null ? "" : pulledCard}/>
            {cardElements}
        </div>
    );
}

export default CardTable;