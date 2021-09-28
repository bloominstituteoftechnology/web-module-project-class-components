import React from "react";


class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			input:""
		}
	}

	handleChanges = e => {
		this.setState({
			input: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleAddTodo(this.state.input);
		this.setState({
			input: ""
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input onChange={this.handleChanges} type="text" placeholder="Type Task Here" task="item" />
				<button>Add Todo</button>
				<button>Clear Completed</button>
			</form>
		)
	}
}

export default TodoForm