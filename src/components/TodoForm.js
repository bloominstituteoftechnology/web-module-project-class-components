import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            input: ""
        }
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            input: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd(this.state.input);
    }

    render() {
        return(
            <div className="TodoForm">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input 
                            type="text"
                            name="item"
                            onChange={this.handleChange}
                        />
                    </label>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;