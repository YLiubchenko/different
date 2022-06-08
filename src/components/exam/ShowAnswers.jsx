import React from 'react';
import s from './style.module.css'

const ShowAnswers = ({answerData}) => {
    let {enteredAnswer, answer} = answerData;
    let is = (answer === enteredAnswer);

    return (
        <div className={is ? s.green : s.red}>
            {is
                ? `ваш ответ ${enteredAnswer}, правильно`
                : `ваш ответ ${enteredAnswer}, не правильно, правильный ответ ${answer}`}
        </div>
    )
}

export default ShowAnswers;