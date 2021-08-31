import React from 'react';
 import './Todo.css'

 class Todo extends React.Component {
    //  constructor() {
    //      super()
    //  }
     render() {
         return (
             <div>
                 <h2 onClick={() => this.props.toggleCompleted(this.props.item.id)} className={this.props.item.completed ? ' completed' : ''} >{this.props.item.name}</h2>
                 <label for="completed">done</label>
             <input  type="checkbox" onChange={() => this.props.toggleCompleted(this.props.item.id)} checked={this.props.item.completed} />
             </div>
         )
     }
 }

 export default Todo;

