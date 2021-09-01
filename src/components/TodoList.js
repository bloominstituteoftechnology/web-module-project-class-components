// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

 class TodoList extends Component {

    render() {
        const todos = this.props.todos.map(todo => {
           return <Todo todo={todo} toggleCompleted={this.props.toggleCompleted}/>
        })
        return (
            <div>
                {todos}
                <TodoForm clearCompleted={this.props.clearCompleted} todos={this.props.todos} addItem={this.props.addItem}/>
            </div>
        )
    }
}

export default TodoList
