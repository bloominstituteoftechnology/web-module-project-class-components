// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = props => {
	return (
		<div>
			{props.taskList.map(item => (
				<Todo
					key={item.id}
					item={item}
					toggleComplete={props.toggleComplete}
					deleteFinished={props.deleteFinished} />
			))}
		</div>
	)
}

export default TodoList