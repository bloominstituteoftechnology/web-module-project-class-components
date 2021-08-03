import React from "react";

class TodoForm extends React.Component{

    render(){
        return(
            <form>
                <input value ={this.props.input} onChange={this.props.handleChanges} type="text" name="item" />
                <button onClick = {this.props.handleClick}>Add</button>
            <div>bobs your TodoForm </div>
            </form>
        )
    }
}
export default TodoForm 