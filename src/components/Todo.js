import React from 'react';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

const list = [
    {
        item: 'Build app',
        id: 123,
        done: false
    },
    {
        item: 'Style app',
        id: 321,
        done: false
    }
];

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            listItems: list
        }
    }

        toggleDone = ( id ) => {
            this.setState({
                ...this.state,
                listItems: this.state.listItems.map(item => {
                    if(item.id === id) {
                        return({
                            ...item,
                            done: !item.done
                        })
                    } else {
                        return( item )
                    }
                })
            })
        }

        handleAdd = ( item ) => {
            const newItem = {
                item: item,
                id: Date.now(),
                done: false
            };

            this.setState({ 
                ...this.state,
                listItems: [ ...this.state.listItems, newItem ]
            });
        }

        handleClear = () => {
            this.setState({
                ...this.state,
                listItems: this.state.listItems.filter(item => {
                    return( item.done === false )
                })
            })
            console.log(this.state.listItems);
        }

    render() {
        return (
            <div className = 'todo'>
                <h1>Todo List</h1>
                <TodoList toggleDone = { this.toggleDone } handleClear = { this.handleClear } listItems = { this.state.listItems } /><br />
                <TodoForm handleAdd = { this.handleAdd } /> 
            </div>
        )
    }
}

export default Todo;