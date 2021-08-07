import React from 'react'


const Todo = props => {
	const handleToggle = () => {
		props.toggleComplete(props.item.id)
	}
	const handleDelete = () => {
		props.deleteFinished(props.item.id)
	}
	return (
		<div onClick={handleToggle}>
			{props.item.task}
			<button onClick={handleDelete}>x</button>
		</div>
	)
}

export default Todo;