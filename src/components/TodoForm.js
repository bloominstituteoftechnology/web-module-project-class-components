import React from "react";

class TodoForm extends React.Component {
	// Constructor with state:
	constructor(props) {
		super(props);
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
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					onChange={this.state.handleChanges}
					value={this.state.newTaskName}
				/>
			</form>
		);
	}
}

export default TodoForm;
