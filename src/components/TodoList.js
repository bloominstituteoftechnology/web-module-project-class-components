import React from 'react' 
import { Todo } from './Todo'

class TodoList extends React.Component {
    clearThis = (event) => {
        event.preventDefault();
        this.props.clear();
    }

    handleChange = (event) => {
        event.preventDefault();
        this.props.addClick(document.getElementById("neoTodo").value);
        document.getElementById("neoTodo").value = "";
    }
    
    render() {
        return (
            <div id="todo-list">
                <h1>To Do List</h1>
                <label htmlFor="neoTodo">New Task
                    <input id="neoTodo" className="neoTodo" type="text" />
                    <button id="button-add-todo" className="btn button-todo-add" onClick={this.handleChange}>Add Todo</button>
                </label>
                <div id="todo-display">
                    {this.props.todos.map(todo => (
                        <Todo key={todo.id} todo={todo} onClick={this.props.todoClick}/>
                    ))}                
                    <button id="button-clear" className="btn button-clear"
                        onClick={this.clearThis}>
                        Clear Completed
                    </button>
                </div>
            </div>
    )}
}

export {
    TodoList
}