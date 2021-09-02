// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react"
import Todo from "./Todo"

class TodoList extends React.Component {

    render() {
        return (
            <div className="TodoList">
                {this.props.Todos.map((eachTodo) => (
                    <Todo
                        todo={eachTodo}
                        handleTodoToggle={this.props.handleTodoToggle}
                    />
                ))}
            </div>
        )
    }
}

export default TodoList;