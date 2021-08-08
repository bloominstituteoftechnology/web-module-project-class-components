import React from 'react'

class TodoForm extends React.Component {
    // Constructor with state

    render() {
        return (
            <form>
                <input type='text' name ='task' placeholder='add task...'/>
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}
export default TodoForm