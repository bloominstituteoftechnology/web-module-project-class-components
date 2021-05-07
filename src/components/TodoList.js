import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
	return (
		<div>
			{props.todo.map((task) => (
				<Todo
					key={task.id}
					toggleCompleted={props.toggleCompleted}
					task={task}
				/>
			))}
			<button onClick={() => props.clearCompleted()}> Clear Completed </button>
		</div>
	);
};

export default TodoList;
