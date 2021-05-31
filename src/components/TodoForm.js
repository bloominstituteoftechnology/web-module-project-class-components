import React from 'react';

class TodoForm extends React.Component {
    // constructor() {
    //     super();

    // }
    render() {
        return(
            <form>
                <input type="text" name="text" />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        );
    }
}

export default TodoForm;