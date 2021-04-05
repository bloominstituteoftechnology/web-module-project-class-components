import React, { Component } from "react";
import TodoForm from "../src/components/TodoForm";
// import { todoData } from "../src/components/Todo";
import TodoList from "../src/components/TodoList";

class App extends Component {
	constructor() {
		super();

		this.state = {
			data: [
				{
					task: "Organize Garage",
					id: 1528817077286,
					completed: false,
				},
				{
					task: "Bake Cookies",
					id: 1528817084358,
					completed: true,
				},
			],
		};
	}
	handleDonetask = (e) => {
		e.preventDefault();
		const doneItems = this.state.data.filter((item) => {
			if (item.completed === false) {
				return item;
			}
		});
		this.setState({ data: doneItems });
	};

	onKeyPressed = (e) => {
		e.preventDefault();
		console.log("on key press invoked");
	};
	handleTaskClicked = (e) => {
		const clickedTargetText = e.target.innerText;

		const toBeUpdatedElemtent = this.state.data.find(
			(element) => element.task === clickedTargetText
		);

		toBeUpdatedElemtent.completed = !toBeUpdatedElemtent.completed;

		const updatedState = this.state.data.map((item) => {
			if (item.id === toBeUpdatedElemtent.id) {
				return toBeUpdatedElemtent;
			}
			return item;
		});

		console.log("updatedState", updatedState);

		this.setState({ data: updatedState });
	};

	addTask = (task) => {
		this.setState({ data: [...this.state.data, task] });
	};

	render() {
		return (
			<div>
				<div>
					<h2>Todo List: MVP</h2>
				</div>
				<TodoList onClick={this.handleTaskClicked} data={this.state.data} />

				<TodoForm
					addTask={this.addTask}
					onKeyPress={this.onKeyPressed}
					handleDoneTask={this.handleDonetask}
					handleDonetask={this.handleDonetask}
				/>
			</div>
		);
	}
}

export default App;
