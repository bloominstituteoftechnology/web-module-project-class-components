import React from 'react'

class ListForm extends React.Component {
    constructor(){
        super();
        this.state = {
            input:""
        }
    }
handleChanges = e => {
    this.setState({
        input:e.target.value
    });
};

handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddTodo(this.state.input);
}
render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChanges} type="text" name="item"/>
            <button>Add to do</button>
        </form>
    );
}
}

export default ListForm;