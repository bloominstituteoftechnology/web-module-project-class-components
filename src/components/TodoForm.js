import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }

    handleChange = evt => {
        this.setState({
            input: evt.target.value
        });
    };
    
    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.addTask(this.state.input);
    }

    handleComplete = () => {
        this.props.completeTask()
    }

    render(){
        return(
            <form>
                <input onChange={this.handleChange} type='text' name='task'/>
                <button onClick={this.handleSubmit}>Add Task</button>

                <div>
                   <button onClick={this.handleComplete}>Complete Task</button>
                </div>
            </form>
        )
    }
}

export default TodoForm