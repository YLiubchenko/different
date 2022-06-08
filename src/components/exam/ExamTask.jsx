import React from 'react';

function ExamTask({item}) {

    const handleChange = (e) => {
        item.enteredAnswer = (e.target.value).toLowerCase();
    }

    return (
        <div>
            <input type="text" name={item.id} placeholder='Enter the answer' onBlur={handleChange}/>
        </div>
    )
}

export default ExamTask;