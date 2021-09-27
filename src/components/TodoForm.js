import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            input: ""
        }
    }

    render() {
        return(
            <div className="TodoForm">
                <header>
                    <h1>Todo Form</h1>
                </header>
            </div>
        )
    }
}

export default TodoForm;