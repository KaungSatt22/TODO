import React, {useState} from "react";
//monk json data
import data from './TODO/data.json';
//TODO
import Header from "./TODO/Header";
import TodoList from './TODO/TodoList'
import ToDoForm from "./TODO/ToDoForm";


function App(){
    const [todoList,setTodoList] = useState(data);
    const handleClick = (id)=> {
        const handleId = todoList.map(task=>{
            return task.id === Number(id) ? {...task, complete : !task.complete} : {...task}
        })
        setTodoList(handleId)
    }
    const handleClean = ()=>{
        const clean =  todoList.filter(task=>{
            return !task.complete;
        })
        setTodoList(clean)
    }
    const addTask = (userInput)=> {
        let copy = [...todoList]
        copy = [...copy, {id : todoList.length +1 , task : userInput, complete : false}]
        setTodoList(copy)
    }
    return (
        <div className={'App'}>
            <Header/>
            <ToDoForm addTask={addTask}/>
            <TodoList todoList={todoList} handleClick={handleClick} handleClean={handleClean}/>
        </div>
    )
}
export default App