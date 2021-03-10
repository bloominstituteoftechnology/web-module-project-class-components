import React from "react";

class TodoForm extends React.Component {

    constructor(){
        super();
        this.state = {
            itemText: '',
        };
    }

    handleChanges = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.addItem(this.state.itemText);
        this.setState({
            itemText: '',
        });
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type = "text"
                    name = "itemText"
                    value = {this.state.itemText}
                    onChange = {this.handleChanges}

                />
                <button>Add</button>

                

            </form>
        )
    }
}

export default TodoForm;