import React, {useState} from 'react';
import AllQuestion from "../examOneByOne/AllQuestions";
import OneQuestionWithRadio from "./OneQuestionWithRadio";

export function PageExam({examData}) {

    let [pageSize, setPageSize] = useState(0);
    let [isFinish, setIsFinish] = useState(false);

    const finishExam = () => {
        setIsFinish(true)
    }

    return (
        <div>
            {isFinish
                ? <AllQuestion examData={examData}/>
                : <OneQuestionWithRadio pageSize={pageSize} setPageSize={setPageSize}
                               examData={examData} finishExam={finishExam}/>
            }
        </div>
    )

}