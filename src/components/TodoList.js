import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map((todo) => {
                        return (
                            <Todo todo={todo}/>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default TodoList