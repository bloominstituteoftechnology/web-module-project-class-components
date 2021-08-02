import React from 'react'

class TodoForm extends React.Component{
    constructor() {
        super();
        this.state ={
            inputValue:""
        }
    }
    handleChanges = e =>{
        this.setState({
            ...this.state,
            inputValue:e.target.value
        })
    }
    handleClick =(e)=>{
        e.preventDefault();
        this.props.handleAddItem(this.state.inputValue)
    }
    render(){
    return <div>
        <form>
            <input onChange={this.handleChanges} type="text"  defaultValue=""/>
            <button onClick={this.handleClick}>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    </div>
}
}
export default TodoForm;
