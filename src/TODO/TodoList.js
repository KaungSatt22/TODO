import React from "react";
import Todo from './Todo';

const TodoList = ({todoList, handleClick,handleClean})=>{
    return (
        <ul className={'list-group'}>
            {todoList.map(todo=>{
                return (
                    <Todo todo={todo} handleClick={handleClick}/>
                )
            })}
            <button onClick={handleClean} style={{margin : '20px'}}
                    className={'btn btn-outline-danger'}>Clean Complete</button>
        </ul>
    )
}
export default TodoList;