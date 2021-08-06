import React from 'react'

class ToDoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			newTask: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			...this.state,
			newTask: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.addItem(this.state.newTask);
		this.setState({
			...this.state,
			newTask: ''
		})

	}
	
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor='addItem'>Task: {' '}
						<input
							type="text"
							name="addItem"
							placeholder="add a new task"
							onChange={this.handleChange}/>
						<button
							type="submit">Add Task
						</button>
					</label>
				</form>
			</div>
			)
		}
}
	
export default ToDoForm