import React from 'react';

class Todo extends React.Component {
    render() {
        return (
          <div>
            <ToDoList name={this.state.name} />
            <button onClick={this.addToDo} />
          </div>
        );
      
    

    export default Todo