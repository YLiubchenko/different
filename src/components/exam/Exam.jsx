import React, {useState} from 'react';
import ExamTasks from "./ExamTasks";

function Exam({examData}) {

    let [isAnswers, setIsAnswers] = useState(false);

    const handleClick = () => {
        setIsAnswers(true);
    }

    return (
        <div>
            <ExamTasks isAnswers={isAnswers} examData={examData}/>

            <button onClick={handleClick}>Pass test</button>
        </div>
    )
}

export default Exam;