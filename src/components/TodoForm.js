import React from 'react';

class TodoForm extends React.Component{
    constructor() {
        super();
        this.state ={
            input: ''
        }
    }
    
    handleChanges= e => {
        this.setState({
            ...this.state,
            input: e.target.value
        });
    }

    handleSubmit= e => {
        e.preventDefault();
        this.props.handleAddItem(this.state.input);

    }
    render(){
        return(

            <form onSubmit= {this.handleSubmit}>
                <input
                    type= 'text'
                    name= 'item'
                    onChange= {this.handleChanges}
                    placeholder= 'Add Todo Item Here'
                    />
                <button>Lets do it!</button>
            </form>

        )
    }
}

export default TodoForm;
