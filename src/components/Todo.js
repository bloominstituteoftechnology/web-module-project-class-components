import React from 'react';



const Todo = (props) =>
{
    console.log("from todo", props.completed);
        return (
            <div>
          <li className="tasks" key={props.id} >
            <h3> Task To be Completed--> {props.task}</h3>
          </li>
          <button onClick={props.toggleCompleted}>Done</button>
          </div>
        );
      };  

export default Todo;