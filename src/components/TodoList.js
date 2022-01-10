// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {

   render (){
       return(
           <div className='todo-list'>
               <ul>
               {this.props.todo.map(todo => {
                   <Todo key={todo.id} todo={todo}/>
               })}
            </ul>
           </div>
       );
   }
}

export default TodoList;