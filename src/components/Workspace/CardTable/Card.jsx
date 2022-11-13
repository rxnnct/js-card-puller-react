import React from "react";
import style from './Card.module.scss';

const Card = (props) => {
    return (
        <div className={`${style.card} ${props.isPulled ? style.pulledCard : ""}`}>
            1
        </div>
    );
}

export default Card;