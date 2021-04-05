import React, { Component } from "react";
import "./Todo.css";
export class Todo extends Component {
	render() {
		const { item, onClick } = this.props;

		return (
			<div>
				<p onClick={onClick} className={item.completed ? "done" : null}>
					{item.task}
				</p>
			</div>
		);
	}
}

export default Todo;
