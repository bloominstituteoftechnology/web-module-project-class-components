import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {inputsVal:''}
      }

    addItem = (e) => {
        e.preventDefault();
        this.props.handleAddItem(this.state.inputsVal)
        this.setState({inputsVal:''})
      }
     
      inputs = (e) => {
    console.log(e.target.value);
    this.setState({inputsVal: e.target.value});

      }


    removeItem = (event) => {
        event.preventDefault();
        this.props.deleteItem()
      }
render() {
    return (
        <form>
            <input onChange={this.inputs} type="text" placeholder="todo" value={this.state.inputsVal}/>
            <button onClick={this.addItem}>Add Todo</button>
            <button onClick={this.removeItem}>Clear Completed</button>

        </form>
    )
}

}

export default TodoForm;