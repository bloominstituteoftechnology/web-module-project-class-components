import React from 'react';

//extends constructor
//handleChange
//handleSubmit
//return statement
//export

class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state={
            input:''
        }
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            input: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddItem(this.state.input);
    }

    render(){
        return (
            <div className="form-container">
            <form onSubmit={this.handleSubmit}>
                <label>
                    <button onClick={this.handleSubmit}>Add Item</button> :&nbsp; 
                <input 
                    onChange={this.handleChange}
                    type='text'
                    name='item'
                />
                </label>
            </form>
            </div>
        )
    }


}

export default ToDoForm