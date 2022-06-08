import React from "react";
import s from './tictac.module.css'


const Square = ({value, onClick}) => {

    return (
        <button className={s.square} onClick={onClick}>
            {value}
        </button>
    )
};

export default Square;