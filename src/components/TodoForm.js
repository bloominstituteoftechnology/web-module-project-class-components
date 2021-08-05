import React from "react";

const TodoForm = props => {
    const formSubmit = event => {
        event.preventDefault();
        props.updateTodoList();
        props.refreshFormValues();
    }
    return (
        <form onSubmit={formSubmit}>
            <label>Things you need to get done!</label>
            <br></br>
            <input type='text' value={props.newTodoTask} onChange={props.setNewTodoTask}/>
            <input type='submit' value='Add Todo' />
        </form>
    )
}

export default TodoForm;