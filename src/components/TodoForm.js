import React from "react";

class TodoForm extends React.Component {
	// Constructor with state:
	constructor() {
		super();
		this.state = {
			newTaskName: "",
		};
	}

	// onchange handler:
	handleChanges = (e) => {
		this.setState({
			newTaskName: e.target.value,
		});
	};

	//onsubmit handler:
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addTask(this.state.newTaskName);
	};

	render() {
		return (
			<div>
				<h3>Add things to do:</h3>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						onChange={this.handleChanges}
						value={this.state.newTaskName}
					/>
					<button>Add Task</button>
				</form>
			</div>
		);
	}
}

export default TodoForm;
