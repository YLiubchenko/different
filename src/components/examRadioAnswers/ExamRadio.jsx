import React, {useState, useEffect} from 'react';
import {PageExam} from "./PageExam";

function ExamRadio() {
    let [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            let fetchUrl = await fetch('apishechka.json');
            let dataJSON = await fetchUrl.json();
            setData(dataJSON);
        }

        getData();

    }, [])

    return (
        <div>
            <h1>Exam with radio buttons</h1>
            {data && <PageExam examData={data}/>}
        </div>
    )
}

export default ExamRadio;