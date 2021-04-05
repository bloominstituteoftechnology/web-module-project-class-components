//will hold your input field and your 
//`Add Todo` and `Clear Completed` buttons.

import React from "react";

class TodoForm extends React.Component
{
    constructor() 
    {
        super();
        this.state = {
            input:""
        }
    }


    //handleChange for adding new items
    handleChange = event =>
    {
        this.setState(
        {
            input: event.target.value
        }
        );
    };

    //handleSubmit
    handleSubmit = event =>
    {
        event.preventDefault();
        this.props.addItem(this.state.input);
    }

    render()
    {
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" name="item"/>
                <button>Add</button>
            </form>
        );
    }
};

export default TodoForm;
