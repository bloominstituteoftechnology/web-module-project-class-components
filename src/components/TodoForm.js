/**
 * Tom Bielawski
 * Lambda School WEB45 3.1.1
 * React to-do
 * 08/02/2021
 */

//Import statements
import React from "react";


//Class definition
class TodoForm extends React.Component
{
     //Constructor
     constructor()
     {
        //Call super for inheritance
        super();
 
         //Set the todo form state
        this.state = 
        {
            //Init with empty string
            inputValue: ""
        }
    }

 
    //Change handler function
    handleChanges = e => 
    {
        // update state with each keystroke
        this.setState
        ({
            //Spread in state values
            ...this.state,
            inputValue: e.target.value
        })

        console.log(this.state);
    };

    // class property to submit form
    handleSubmit = (e) => 
    {
        //Prevent continual reloading
        e.preventDefault();
       
        //accept
        this.props.handleAddItem(this.state.inputValue);
    }

     //Class return function
     render()
    {
        return(
         <form>
             <h2>Welcome to your Todo App!</h2>

             {/* Label */}
             <label> Input goes here</label>  

             {/* Input */}
             <input
             type = "text"
             name = "item"
             //change handler function
             onChange = {this.handleChanges}>
             </input>
             
             {/* Submit button with handler */}
             <button onClick = {this.handleSubmit}>SUBMIT</button>
             <button>CANCEL</button>
         </form>
        )
    }
 
     
}

//Export statement
export default TodoForm;


