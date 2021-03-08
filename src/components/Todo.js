import React from 'react';
import './Todo.css';

class Todo extends React.Component {
	render() {
		return (
			<div
				className={`todo ${this.props.todo.completed ? 'completed' : ''}`}
				onClick={() => this.props.toggleCompleted(this.props.todo.id)}
			>
				<p>{this.props.todo.task}</p>
				{/* <button onClick={() => this.props.removeTodo(this.props.todo.id)}>
					remove
				</button> */}
			</div>
		);
	}
}

export default Todo;
