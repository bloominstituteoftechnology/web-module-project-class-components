import React, { Component } from 'react'

 class TodoForm extends Component {
     constructor(props){
         super(props)
         this.state = {
             inputValue: ''
         }
     }

     handlSubmit =(event) => {
         event.preventDefault()
        
        this.props.addItem(this.state)
        this.setState({
            inputValue: ''
        })
     }

     handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
       
     }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handlSubmit}>
                    <input type='text' name='inputValue' value={this.state.inputValue} onChange={this.handleChange}/>
                    <button >Add Todo</button>
                    
                </form>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm;