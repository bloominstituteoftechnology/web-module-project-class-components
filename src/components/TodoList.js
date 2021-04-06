import React from 'react';
import ToDo from '../components/Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
class TodoList extends React.Component {
	renderTodoList = () =>
		this.props.todoList.map((todo) => (
			<ToDo
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