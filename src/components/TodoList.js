// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";
import Todo from "./Todo";
class TodoList extends Component {
	render() {
		const { onClick, data } = this.props;
		return (
			<div>
				<div>
					{data.map((item) => {
						return <Todo onClick={onClick} key={item.id} item={item} />;
					})}
				</div>
			</div>
		);
	}
}
export default TodoList;
