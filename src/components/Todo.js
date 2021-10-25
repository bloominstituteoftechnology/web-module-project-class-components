import React from 'react'

class Todo extends React.Component{
    constructor(){
        super();
    }

    handleClick=()=>{
       this.props.toggleItems(this.props.todo);
    }

    render(){
        return(
            <div onClick={this.handleClick} className={`todo${this.props.todo.done ? ' done' : ''}`}>
                <p>•&nbsp;{this.props.todo.todo}</p>
            </div>
        )
    }
}

export default Todo