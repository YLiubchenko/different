import React from 'react';

export function Answers({answerData}) {

    let {id, answers} = answerData;

    const clickChange = (e) => {
        answerData.enteredAnswer = e.target.value;
    }

    const AnswerLine = () => {
        return answers.map(answer => {
            return (
                <label key={Date.now() + Math.random()}>
                    <input type="radio" name={id} value={answer}/>
                    {answer}
                </label>
            )
        })
    }

    return (
        <div onChange={clickChange}>
            <AnswerLine/>
        </div>
    )

}