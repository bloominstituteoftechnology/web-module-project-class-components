import React from "react";

 class TodoForm extends React.Component {
     // Constructor with state
     constructor() {
         super();
         this.state = {
             newItem: ''
         }
     }
     handleChanges = e => {
         // update state with each keystroke
         this.setState({
             ...this.state,
             newItem: e.target.value
         });
     };

     // class property to submit form
     handleSubmit = e => {
         e.preventDefault();
         // phone home to the App component with our new grocery to add
         this.props.addToList(this.state.newItem);
         this.setState({
             ...this.state,
             newItem: ''
         })
     };



     render() {
         return (
             <div>
                 <form onSubmit={this.handleSubmit}>
                     <input type="text" placeholder='Enter Task' onChange={this.handleChanges} value={this.state.newItem} />
                     <button>Add Todo</button>
                 </form>
             </div>
         );
     }
 }

 export default TodoForm; 
