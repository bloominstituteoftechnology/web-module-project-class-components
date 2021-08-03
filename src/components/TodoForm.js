import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            value: e.target.value
        })
        console.log(this.state.value)
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.value)
        // this.setState({
        //     value:''
        // })
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        placeholder='What to do?'
                        name='todo'
                        type='text'
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleClick}>Submit</button>
                </form>
                <button onClick={this.props.handleClear}>Clear Completed Tasks</button>
            </div>
        )
    }
} 

export default TodoForm;