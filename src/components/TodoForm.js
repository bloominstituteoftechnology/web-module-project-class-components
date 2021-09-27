import React from 'react';


class ToDoForm extends React.Component{
    constructor(){
        super();
        this.thats = {
            input: ''
        }
    }

    handleChanges = e => {
        // update state with each keystroke
        this.setState({
          input:e.target.value
        });
      };
      
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddItem(this.state.input);
    }



    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
                <input 
                    onChange={this.handleChanges} 
                    type="text" 
                    name="item" 
                />
                <button>Add Todo</button>
            </form>
        )
    }


}

export default ToDoForm;
