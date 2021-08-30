import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            input:''
        }
    }

    changeHandler = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    handleClickAdd = (e) => {
        e.preventDefault();
        this.props.handleAdd(this.state.input);
        this.setState({
            input: ''
        });
    }

    handleClickClear = e => {
        e.preventDefault();
        this.props.handleClear();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAdd(this.state.input);
        this.setState({
            input: ''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        name='task'
                        value={this.state.input}
                        placeholder='New Task'
                        onChange={this.changeHandler}
                    />
                </form>
                <button onClick={this.handleClickAdd}>Add Task</button>
                <button onClick={this.handleClickClear}>Clear Completed</button>
            </div>
        )
    }
}



export default TodoForm;