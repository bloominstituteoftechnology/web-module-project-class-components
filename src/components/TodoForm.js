import React from 'react';

const ToDoForm = props => {

        return (
            <div style={{display: "flex"}}>
            <form onSubmit={props.submitHandler}>
                <input type="text" name="AddToDo" id="AddToDo" value={props.newItem} onChange={props.changeHandler} />
                <button>Add</button>
            </form>
            <button onClick={props.clearCompleted}>Clear Completed</button>
            </div>

            
        );
    }

export default ToDoForm;