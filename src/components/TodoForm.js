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

	handleClear = (e) => {
		e.preventDefault();
		
		this.props.handleClearBtn();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input onChange={this.handleChanges} value={this.state.input} type="text" placeholder="Type Task Here" task="item" />
				<button>Add Todo</button>
				<button onClick={ this.handleClear }>Clear Completed</button>
			</form>
		)
	}
}

export default TodoForm