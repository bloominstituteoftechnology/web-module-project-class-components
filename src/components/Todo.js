import React from 'react';


const toggleCompleted = (itemId) => {
    console.log("Task is done:", itemId);
    console.log(this.TodoData,"these are props");
    // map through the array, building a new array from the items
    // when an item matches the one clicked, toggle its purchased flag
    // otherwise, don't make any changes
    const updateTaskList = this.TodoData.map(item => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      else {
        return item;
      }
    });
    this.setState({
        ...this.state,
        ToDoData: updateTaskList
      });
  }
 
const Todo = (props) =>
{
    console.log("from todo", props);
    console.log("from todo item", props.id);
        return (
            <div>
          <li className="tasks" id={props.id} >
            <h3> Task To be Completed--> {props.task}</h3>
          </li>
          <button className="mark-complete" toggleCompleted={toggleCompleted}>✖</button>
          </div>
        );
      };  

export default Todo;