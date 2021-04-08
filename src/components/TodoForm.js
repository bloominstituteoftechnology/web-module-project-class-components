import React from 'react'; 


//holds input field
    //text box to type in task --onclick fires the handler
//Add Todo Button
    //submit text to add to list, once submitted the list should rerender <prevent default is critical> the added todo
//Clear Completed Button
    //use .filter to call your handler function <in the App.js> to filter out any true toggles --onclick fires the handler
    //all the logic/code of .filter lives in App --**cannot pass down setState -- so use this.props.<filterhandlername>

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            newTodo : ''
        }
    }

    handleChanges = e => {
        this.setState({ 
            ...this.state, //this spread operator is updating the state with each keystroke
            newTodo: e.target.value
        })
    };

    submitTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
    }

    render() {
        return(
            <form onSubmit={this.submitTodo}>
                <input value={this.state.newTodo} onChange={this.handleChanges} type="text" task="todo"/>
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;

//this.props.<changehandlername> --this goes on the button onclick
