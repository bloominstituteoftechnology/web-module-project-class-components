import React from 'react';


const Todo = (props) =>
{
    console.log("from todo", props);
        return (
            <div>
          <li className="tasks" key={props.TodoData.id} >
            <h3>{props.TodoData.task}</h3>
            <p>{props.TodoData.completed}</p>
          </li>
          </div>
        );
      };  

export default Todo;