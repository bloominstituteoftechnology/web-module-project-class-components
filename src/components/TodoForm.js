import React from 'react';

class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    handleSubmit = () => {
        this.props.addTask(this.state.value)
    }

    handleEdits = (event) => {
        console.log(event.target.value)
        this.setState({value: event.target.value})
    }

    handleClear = () => {
        this.props.clearTasks()
    }


    render() {
        return(
            <div>
                <input onChange={this.handleEdits}></input>
                <button onClick={this.handleSubmit}>Submit</button>
                <button onClick={this.handleClear}>Clear</button>
            </div>
        )
            
    }

}

export default TodoForm