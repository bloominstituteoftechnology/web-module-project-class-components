import React from 'react';
class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
		formState: {
			todoText: '',
			},
		};
	}

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			...this.state,
			formState: { ...this.state.formState, [name]: value },
		});
	};
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.submitTodo(this.state.formState.todoText);
		this.clearForm();
	};
	clearForm = () => {
		this.setState({
			...this.state,
			formState: { ...this.state.formState, todoText: '' },
		});
	};

	render() {
		return (
			<div class='form-container'>
				<form onSubmit={this.handleSubmit}>
					<input
						name='todoText'
						type='text'
						value={this.state.formState.todoText}
						onChange={this.handleChange}
					/>
					<button type='submit' disabled={this.state.formState.todoText === ''}>Add Todo</button>
				</form>
				<button onClick={() => this.props.clearCompleted()}>Clear Completed</button>
			</div>
		);
	}
}

export default TodoForm;