// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

class TodoList extends React.Component{
    constructor (){
        super();
        this.state ={
            todo: ''
        }
    }
    handleChanges = e => {
        this.setState({todo: e.target.value})
    }

    submitTask = e =>{
        e.preventDefault();
        this.setState({todo:''})
        this.props.addTask(this.state.task, e)
    }

    render (){
        return (
            <form onSubmit={this.submitTask}>
                <input
                type= 'text'
                name = 'todo'
                value= {this.state.todo}
                onChange={this.handleChanges}
                />
                <button>Add task</button>
            </form>
        )
    }
}