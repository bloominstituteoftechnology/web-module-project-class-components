// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import { render } from '@testing-library/react';
import React from 'react';
import Todo from './Todo'


class TodoList extends React.Component {
    constructor() {
        super()
    }


handleClick = () => {
    this.props.handleTodoCompleted();
}

    render() {
        return(
            <div>
                {this.props.task.map(item => (
                    <Todo handleTodoToggle={this.props.handleTodoToggle} key={item.id} item={item}/>))}        
                <button onClick={this.handleClick} className='clear-btn'>
                    Clear Completed
                </button>      
            </div>
        )
    }
}

export default TodoList;