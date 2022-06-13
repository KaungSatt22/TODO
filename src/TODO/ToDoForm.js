import React, {useState} from "react";

const ToDoForm = ({addTask})=>{
    const [userInput,setUserInput] = useState('');
    const handleInput = e => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }
    return (
        <form onSubmit={handleSubmit} className={'input'}>
            <input type="text" onChange={handleInput} value={userInput}/>
            <button className={'btn btn-outline-info'}>ADD TODO</button>
        </form>
    )
}
export default ToDoForm;