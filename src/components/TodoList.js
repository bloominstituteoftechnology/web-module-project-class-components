// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

// class TodoList extends React.Component {

//    render (){
//        return(
//            <div className='todo-list'>
               
//                {this.props.todo.map(todo => {
//                    <Todo handleToggleTodo={this.props.handleToggleTodo} key={todo.id} todo={todo}/>
//                })}
          
//            </div>
//        );
//    }
// }

const TodoList = props => {
    // for sorting the list based on whether an item has been purchased or not
    // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
    return (
      <div className="todo-list">
        {props.todo.map(todo => (
          <Todo handleToggleTodo={props.handleToggleTodo} key={todo.id} todo={todo} />
        ))}
      </div>
    );
  };

export default TodoList;