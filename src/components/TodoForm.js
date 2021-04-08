import React from 'react';

const TodoForm = props => {
    
    return (
        <div>
            <h2>
                Add New Task
            </h2>
            

                <input placeholder='Task Name' name='newTask' onChange={props.handleChange} value={props.formValues.newTask}></input>


                <button onClick={props.addTask}>
                    Add
                </button>
                <br />
                <br />
            
            
            
        </div>
    )
}

export default TodoForm;