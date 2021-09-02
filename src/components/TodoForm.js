import React from "react";


export default class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            taskText: "",
        };
    }


    handleChange = (event) => {
        const {name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTask(this.state.taskText)
        this.setState({
            taskText:"",
        })
    }



    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
               <label htmlFor="task-input">Add Task:</label> 
               <input id="task-input" 
               value={this.state.taskText} 
               onChange={this.handleChange}
               name="taskText"/>
               <button>Add Task</button>
              
            </form>
        )
    }
}
