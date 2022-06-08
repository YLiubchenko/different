import React from 'react';
import {Btns} from "../examOneByOne/Btns";
import {Answers} from "./Answers";

function OneQuestionWithRadio({pageSize, setPageSize, examData, finishExam}) {

    let {questionData, answerData} = examData;

    return (
        <div>

            <div>
                <h3>{questionData[pageSize].question}</h3>
                <Answers answerData={answerData[pageSize]}/>
            </div>

            <Btns finishExam={finishExam} pageSize={pageSize}
                  questionDataLength={questionData.length}
                  setPageSize={setPageSize}/>
        </div>
    )
}

export default OneQuestionWithRadio;
