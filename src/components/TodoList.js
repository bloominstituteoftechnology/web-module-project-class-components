// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

class TodoList extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                {this.props.toDoList.map(
                    item => <Todo item={item} toggleCompleted={this.props.toggleCompleted} key={item.id} />
                )}
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
        )
    }
}

export default TodoList;
