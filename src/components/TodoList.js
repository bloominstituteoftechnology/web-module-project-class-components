// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, {useEffect} from 'react';
import Todo from './Todo';

const TodoList = props => {


    const handleClick = () => {
        props.handleClear();
    }

    return (
        <div>
        {
        props.chores.map((chore, index) => {
            return <Todo key={index} handleCompleted={props.handleCompleted} chore={chore} />
        })
        }
        <button onClick={handleClick} className="clear-btn">
        Clear Chores
      </button>
    </div>
    )
}

export default TodoList;