import React from 'react';

class TodoForm extends React.Component{

    render(){
        return(
            <form>
                <input type='text'/>
                <button>Add Task</button>
                <button>Clear Completed Task</button>
            </form>
        )
    }
}

export default TodoForm;