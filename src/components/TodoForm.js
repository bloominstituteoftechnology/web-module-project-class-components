import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            itemText: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.itemText);
        this.setState({
            itemText: '',
        });
    };

    handleChanges = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    handleClear = (e) => {
      e.preventDefault();
      this.props.delTodo()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type = 'text'
                    placeholder= 'What do you need to do?'
                    name = 'itemText'
                    value = {this.state.itemText}
                    onChange = {this.handleChanges}
                />
                <div className='buttonDiv'>
                    <button  className='btn'>Add</button>
                    <button className='clearBtn btn' onClick={this.handleClear}>Clear Completed</button>
                </div>
                
            </form>
        )
    }
}

export default TodoForm