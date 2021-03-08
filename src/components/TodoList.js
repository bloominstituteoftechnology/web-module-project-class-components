// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
	renderTodoList = () =>
		this.props.todoList.map((todo) => (
			<Todo
				key={todo.id}
				todo={todo}
				toggleCompleted={this.props.toggleCompleted}
				removeTodo={this.props.removeTodo}
			/>
		));
	render() {
		return <div>{this.renderTodoList()}</div>;
	}
}

export default TodoList;
