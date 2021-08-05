import React from "react";

class TodoForm extends React.Component{
    state = {
        newTask: ""
    }

    handleChanges = e => {
        this.setState({
            ...this.state, 
            newTask: e.target.value
    });
};

handleSubmit = e => {
    e.preventDefault();
        // phone home to the App component with our new grocery to add
    this.props.addItem(this.state.newTask);
    //clear form after submitting and successfully
    this.setState({...this.setState, newTask: ""});
};

    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <input type = "text" name = "task" value = {this.state.newTask} onChange = {this.handleChanges}/>
                <button>Add Task</button>
            </form>
        )
    }
}

export default TodoForm;