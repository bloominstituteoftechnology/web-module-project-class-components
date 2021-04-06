import React from 'react';
import './Todo.css';

class ToDo extends React.Component {
	render() {
		return (
			<div
				className={`todo ${this.props.todo.completed ? 'completed' : ''}`}
				onClick={() => this.props.toggleCompleted(this.props.todo.id)}
			>
				<p>{this.props.todo.task}</p>
			</div>
		);
	}
}

export default ToDo;