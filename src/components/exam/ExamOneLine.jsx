import React, {useState, useEffect} from 'react';
import Exam from "./Exam";
import s from './style.module.css'

function ExamOneLine() {

    const [data, setData] = useState(null);

    useEffect(() => {
        async function getApi() {

            let response = await fetch('api.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            let dateJSON = await response.json();
            return setData(dateJSON)
        }

        getApi();
    }, []);

    return (
        <div>
            <h1>Exam</h1>

            {data && <Exam examData={data}/>}
        </div>
    )
}

export default ExamOneLine;