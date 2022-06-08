import React from 'react';
import ShowAnswers from "../exam/ShowAnswers";

const AllQuestion = ({examData}) => {

    let {answerData, questionData} = examData;

    return answerData.map((item, index) => {
        return (
            <div key={Math.floor(Math.random() * 10000)}>
                <h3>{questionData[index].question}</h3>
                <ShowAnswers answerData={item}/>
            </div>
        )
    })
}


export default AllQuestion;