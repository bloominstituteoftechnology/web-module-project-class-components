import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newItemName: ''
        }
    }


    handleChanges = (e) => {
        this.setState({ newItemName: e.target.value })
    }

    // onSubmit = (e) => {
    //     preventDefault();
    // }

    render() {
        return (
            <form>
                {/* Value is linked to the state. */}
                <input onChange={this.handleChanges} value={this.state.newItemName} type="text" name="item" />
                <button>TodoForm Class Component.</button>
            </form>
        );
    }
}

export default TodoForm;