import React from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const todo = [
	{
		task: "learn class components",
		id: 123,
		completed: false,
	},
];

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state

	//constructor - method used to create an object with class (JS)
	//constructor - defines the initial state of the component. Can also bind any event that occurs in our component
	constructor() {
		super();
		this.state = { todo: todo };
	}

	//CLASS METHODS TO UPDATE THE STATE:

	//Adding new task:
	addTask = (newTaskName) => {
		this.setState({
			todo: [
				...this.state.todo,
				{
					task: newTaskName,
					id: Date.now(),
					completed: false,
				},
			],
		});
	};

	//Toggle completed tasks:
	toggleCompleted = (taskId) => {
		this.setState({
			todo: this.state.todo.map((task) => {
				if (task.id === taskId) {
					return {
						...task,
						completed: !task.completed,
					};
				}
				return task;
			}),
		});
	};

	//Clearing the completed task:
	clearCompleted = () => {
		this.setState({
			//  todo: this.state.todo.filter(task => {
			//   if (task.completed){
			//     return false
			//   }
			//   return true;
			// })
			todo: this.state.todo.filter((task) => !task.completed),
		});
	};

	render() {
		return (
			<div className="App">
				<h2>Welcome to your Todo App!</h2>

				<TodoForm addTask={this.addTask} />
				<TodoList
					todo={this.state.todo}
					toggleCompleted={this.toggleCompleted}
					clearCompleted={this.clearCompleted}
				/>
			</div>
		);
	}
}

export default App;
