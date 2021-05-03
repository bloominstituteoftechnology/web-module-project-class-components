import React from 'react';


class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleChanges = event => {
        this.setState({
            input: event.target.value
            
        })
    }

    render() {
        return (
            <form>
                <input onChange = {this.handleChanges} type = 'text' name = 'item' />
                <button className = 'add-button'>ADD</button>
            </form>
        )
    }
}

export default TodoForm;