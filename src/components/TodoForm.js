import React from "react";

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state ={
            input:''
        }
    }

    Changes = evt => {
        this.setState({
            input: evt.target.value
        });
    };

    Click = evt => {
        evt.perventDefault();
        this.props.Add(this.state.input);
        this.setState({task:''})
    }

    render() {
        return (
            <form>
                <input type='text' name='item' onChange={this.Changes} value={this.state.task}/>
                <button onClick={this.Click}>Add</button>
            </form>
        );
    }
}

export default TodoForm