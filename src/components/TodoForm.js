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

	handleChange = (e) => {
		const { name, value } = e.target;

		this.setState({
			...this.state,
			formState: { ...this.state.formState, [name]: value },
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
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
			<div className='form-container'>
				<form onSubmit={this.handleSubmit}>
					<input
						name='todoText'
						type='text'
						value={this.state.formState.todoText}
						onChange={this.handleChange}
						autoFocus
					/>
					<button type='submit' disabled={this.state.formState.todoText === ''}>
						+ Add
					</button>
				</form>
				<button onClick={() => this.props.clearCompleted()}>
					Clear Completed
				</button>
			</div>
		);
	}
}

export default TodoForm;
