import React from 'react';

const TodoForm = (props) => {

    return(
        <div>
            <form>
                <input 
                    type='text'
                    name='task'
                    placeholder='New Task'
                />
            </form>
            <button>Add New Task</button>
            <button>Clear Completed Tasks</button>
        </div>
    )
}

export default TodoForm;