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
    handleClick = () => {
      
    }
    handleClear = () => {
    
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
                    <button onClick={this.props.handleClick}>Submit</button>
                </form>
                <button onClick={this.handleClear}>Clear Completed Tasks</button>
            </div>
        )
    }
} 

export default TodoForm;