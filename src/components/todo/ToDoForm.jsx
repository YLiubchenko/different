import React, {useState} from "react";

const ToDoForm = (props) => {
    const [value, setDataInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: value,
            completed: false
        })

        setDataInput('');
    }

    const handleChange = (e) => {
        setDataInput(e.target.value);
    }

    return (
        <div>
            <div >
                <form onSubmit={handleSubmit}>
                    <input type="text" value={value} onChange={handleChange} placeholder='Add a todo'/>
                    <button>Add todo</button>
                </form>
            </div>


        </div>
    )
}

export default ToDoForm;