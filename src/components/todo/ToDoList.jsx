import React, {useState} from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import s from "./ToDoContainer.module.css";


const ToDoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

            const newTodo = [todo, ...todos];
        setTodos(newTodo);
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => {
            return prev.map(item => item.id === todoId ? newValue : item)
        });
    }

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }

    const checkBoxChange = (e) => {
        if (e.target.checked) {
            const newTodos = [...todos].map(todo => {
                if (todo.id === +e.target.id) {
                    todo.completed = e.target.checked
                }

                return todo;
            });
           const arr = newTodos.sort((x, y) => x.completed - y.completed);
            setTodos(arr);
        }
    }

    return (
        <div className={s.toDoContainer}>
            <h3>Name</h3>
            <ToDoForm onSubmit={addTodo}/>
            <ToDo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} checkBoxChange={checkBoxChange}/>
        </div>
    );

}

export default ToDoList;