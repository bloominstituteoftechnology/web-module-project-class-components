import React from 'react';

class TodoForm extends React.Component {
    // Constructor with State //
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    render() {
        return (
            <form>
                <input type='text' name='todo' />
                <button>
                    Add To-Do
                </button>
            </form>
        )
    }
}

export default TodoForm;