import React from 'react';
import {Btns} from "./Btns";

function OneQuestion({pageSize, setPageSize, examData, finishExam}) {

    let {questionData, answerData} = examData;


    const enterAnswer = (e) => {
        answerData[pageSize].enteredAnswer = e.target.value;
        e.target.value = ''
    }


    return (
        <div>

            <div>
                <h3>{questionData[pageSize].question}</h3>
                <input type="text" onBlur={enterAnswer} placeholder='Enter your answer'/>
            </div>

            <Btns finishExam={finishExam} pageSize={pageSize}
                  questionDataLength={questionData.length}
                  setPageSize={setPageSize}/>
        </div>
    )
}

export default OneQuestion;
