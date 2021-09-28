import "./Todo.css";
import React from "react";

const Todo = props => {
	
		const handleClick = (e) => {
			props.handleToggle(props.id);
		}

	
		return (
			<div onClick={handleClick} className= {`item ${props.completed ? 'completed' : ''}`}>
				<h3 key={props.id} >{props.task}</h3>
			</div>
		)
	
}
export default Todo