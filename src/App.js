import React from 'react';
import TodoForm from './components/TodoForm';
import ToDoList from './components/TodoList';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state.
  
  constructor() {
		super();
		this.state = {
			toDoListArray: [],
		};
	}

	toggleCompleted = (todoId) => {
		const mappedArray = this.state.toDoListArray.map((todo) => {
			return todo.id === todoId
				? { ...todo, completed: !todo.completed }
				: todo;
		});

		this.setState({ ...this.state, toDoListArray: mappedArray });
	};

	clearCompleted = () => {
		const filteredArray = this.state.toDoListArray.filter(
			(todo) => !todo.completed
		);
		this.setState({ ...this.state, toDoListArray: filteredArray });
	};

	submitTodo = (todoText) => {
    if (todoText === '') return;
		const newTodo = {
			task: todoText,
			id: Date.now(),
			completed: false,
		};
		this.setState({
			...this.state,
			toDoListArray: [...this.state.toDoListArray, newTodo],
		});
	};

	render() {
		return (
			<div className='app'>
				<h1 className="rainbow">Welcome to your TODO App!</h1>
				<TodoForm
					submitTodo={this.submitTodo}
					clearCompleted={this.clearCompleted}
				/>
				<ToDoList
					todoList={this.state.toDoListArray}
					toggleCompleted={this.toggleCompleted}
					removeToDo={this.removeToDo}
				/>
			</div>
		);
	}
}

export default App;
