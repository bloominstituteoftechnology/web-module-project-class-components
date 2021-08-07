import React from 'react'

class Todo extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div onClick={() => this.props.toggleComplete(this.props.item.id)}>{this.props.item.name}</div>
		)
	}
}

export default Todo;