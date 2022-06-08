import React, {useState} from 'react';
import OneQuestion from "./OneQuestion";
import AllQuestion from "./AllQuestions";

function ExamPage ({examData}) {
    let [pageSize, setPageSize] = useState(0);
    let [isFinish, setIsFinish] = useState(false);

    const finishExam = () => {
        setIsFinish(true)
    }

    return (
        <div>

            {isFinish
                ? <AllQuestion examData={examData}/>
                : <OneQuestion pageSize={pageSize} setPageSize={setPageSize}
                               examData={examData} finishExam={finishExam}/>
            }
        </div>
    )
}

export default ExamPage;