import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';

const todoTask = [
    {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
    },
    {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
    },
    {
        task: 'Vacuum Leaving Room',
        id: 1528817084360,
        completed: false
    },
    {
        task: 'Wash Car',
        id: 1528817084333,
        completed: false
    }
];
class App extends React.Component
{
    constructor()
    {
        super();
        this.state =
        {
            todoTask: todoTask
        };

    }

    handleToggle = (id) => 
    {
        console.log('this is id:', id);
        this.setState({
            ...this.state,
            todoTask: this.state.todoTask.map(task =>
            {
                if (task.id === id)
                {
                    console.log('App: ', task.id);
                    return ({
                        ...task,
                        completed: !task.completed
                    });
                } else
                {
                    return task;
                }
            })
        });
    };
    //Add task

    handleAddTask = (name) =>
    {
        const newTask = {
            name: name,
            id: Date.now(),
            completed: false
        };

        this.setState({
            ...this.state,
            todoTask: [...this.state.todoTask, newTask]
        });
    };

    //Clear Completed Task
    handleClear = () =>
    {
        this.setState({
            ...this.state,
            todoTask: this.state.todoTask.filter(item =>
            {
                return (!item.completed);
            })
        });
    };


    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    render()
    {
        return (
            <div className="App">
                <div className="Header">
                    <h1>Welcome to your Todo App!</h1>
                    <TodoForm handleAddTask={this.handleAddTask} />
                </div>
                <TodoList todoTask={this.state.todoTask} handleClear={this.handleClear} handleToggle={this.handleToggle} />
            </div>
        );
    }
}

export default App;
