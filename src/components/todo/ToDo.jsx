import React, {useState} from "react";
import s from "./ToDoContainer.module.css";
import {AiOutlineCloseCircle, RiEdit2Line} from "react-icons/all";
import ToDoForm from "./ToDoForm";

const ToDo = ({todos, removeTodo, updateTodo, checkBoxChange}) => {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = (value) => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: '',
        })

    }

    if (edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitUpdate}/>
    }

    return todos.map((todo) => {
        return (
            <div className={s.toDoItem} key={todo.id}>
                <input type="checkbox" defaultChecked={todo.completed} onChange={checkBoxChange} id={todo.id}/>
                <p className={s.description} key={todo.id}>{todo.text}</p>

                <div className='icons'>
                    <RiEdit2Line onClick={() => setEdit({id: todo.id, value: todo.text})}/>
                    <AiOutlineCloseCircle onClick={() => removeTodo(todo.id)}/>
                </div>
            </div>
        )

    })
}

export default ToDo;