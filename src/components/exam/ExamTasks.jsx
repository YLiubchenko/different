import React from 'react';
import ExamTask from "./ExamTask";
import ShowAnswers from "./ShowAnswers";

function ExamTasks({isAnswers, examData}) {

    const createExamQuestion = examData.questionData.map((item, index) => {
        return (
            <div key={Math.floor(Math.random() * 1000)} className='question'>
                <h4>{item.question}</h4>
                {
                    isAnswers
                        ? <ShowAnswers answerData={examData.answerData[index]}/>
                        : <ExamTask item={examData.answerData[index]}/>
                }
            </div>
        )
    })

    return (
        <div>
            {createExamQuestion}
        </div>
    )
}

export default ExamTasks;