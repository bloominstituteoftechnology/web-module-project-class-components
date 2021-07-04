import React from 'react';
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 1:44:00
class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            formStateEmptyString: ''
        }
    }

    handleChange = (e) => {
        this.setState({ formStateEmptyString: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.formStateEmptyString)
    }

    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        onChange={this.handleChange}
                        name="item"
                        value={this.state.formStateEmptyString}
                    />
                    <button>Add</button>
                </form>
                {/* <p>{this.state.formStateEmptyString}</p> */}
            </div>
        );
    }
}
 
export default TodoForm;