import React, { Component } from "react";

class TodoForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			task: "",
		};
	}
	handleChange = (e) => {
		this.setState({ task: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		let Newtask = {
			task: this.state.task,
			id: Date.now(),
			completed: false,
		};

		this.props.addTask(Newtask);
		console.log(Newtask);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					name="Task"
					type="text"
					value={this.state.task}
					onChange={this.handleChange}
				/>

				<button type="submit">Add Todo</button>
				<button onClick={this.props.handleDoneTask}>Clear Completed</button>
			</form>
		);
	}
}

export default TodoForm;
