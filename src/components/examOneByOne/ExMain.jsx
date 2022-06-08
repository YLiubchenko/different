import React, {useState, useEffect} from 'react';
import ExamPage from "./ExamPage";

function ExamOneByOne() {
    let [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            let fetchUrl = await fetch('api.json');
            let dataJSON = await fetchUrl.json();
            setData(dataJSON);
        }

        getData();

    }, [])


    return (
        <div>
            <h1>Exam</h1>

            {data && <ExamPage examData={data}/>}
        </div>
    )

}

export default ExamOneByOne;