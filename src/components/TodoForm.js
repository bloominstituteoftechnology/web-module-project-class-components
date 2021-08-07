// This component adds items to the form with the 'Add Todo' button to the DOM
import React from "react";

class ToDoForm extends React.Component {
    // Constructor with state
    constructor() {
        super();
        this.state = {
            newItem: ""
        }
    }

    // ??? should this be in app.js - why is it here in example code ???
    handleChanges = e => {
        // update state with each keystroke
        this.setState({
            ...this.state,
            newItem: e.target.value
        });
    };

    // class property to submit form
    handleSubmit = e => {
        // props coming from App.js
        e.preventDefault();
        this.props.addItem(this.state.newItem);
    };

    render() {
       return (
           <form onSubmit={this.handleSubmit}>
               <input 
                    type="text" 
                    name="item" 
                    value={this.state.newItem}
                    onChange={this.handleChanges}
                />
               <button>Add Todo</button>
           </form> 

       ); 
    }


}

export default ToDoForm;