import React from "react";
import ToDo from "../components/Todo"

const ToDoList = props => {

        return (
          <div className="todo-list">
            {props.todos.map((todo) => (
              <ToDo
                key={todo.id}
                todo={todo}
                toggleCompleted={props.toggleCompleted}
              />
            ))}
          </div>
        );
};

export default ToDoList;
