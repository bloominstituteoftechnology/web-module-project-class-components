// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js'

class TodoList extends React.Component {
    render() {
        return (
            <div className='todoList'>
                <ul>
                    {this.props.todos.map((todo) => (
                        <li><Todo key={this.props.id} id={todo.id} task={todo.task} completed={todo.completed} /></li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default TodoList;