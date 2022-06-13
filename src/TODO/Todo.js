import React from "react";

const Todo = ({todo,handleClick})=> {
    const handel = e => {
        e.preventDefault();
        handleClick(e.currentTarget.id)
    }
    return (
        <li className={`list-group-item ${todo.complete ? 'todo strike': 'todo'} `}
            id={todo.id}
            key={todo.id + todo.task}
            onClick={handel}>
            {todo.task}
        </li>
    )
}
export default Todo;