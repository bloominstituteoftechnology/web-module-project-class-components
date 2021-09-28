// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
	
	render() {
		return (<>
			<h2>Todo List</h2>
				{this.props.list.map((item => {
					return <Todo task={item.task} key={item.id} id={item.id} completed={item.completed} handleToggle={this.props.handleToggle }/>
			}))}	
			</>
		)
	}
}
export default TodoList