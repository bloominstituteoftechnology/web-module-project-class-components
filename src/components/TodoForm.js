import React from "react";

const TodoForm = props => {
    const formSubmit = event => {
        event.preventDefault();
        props.updateTodoList();
        props.refreshFormValues();
    }
    return (
        <form onSubmit={formSubmit}>
            <label>What do you need to do?</label>
            <input type='text' value={props.newTodoTask} onChange={props.setNewTodoTask}/>
            <input type='submit' value='Add Todo' />
        </form>
    )
}

export default TodoForm;