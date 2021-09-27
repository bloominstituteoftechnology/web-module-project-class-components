import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: '',
        }
    }

    handleChange = (e) => {
        this.state.task = e.target.value;
    }

    Submit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state.task);
    }

    render() {
        return(
            <div>
                <form onSubmit={this.Submit}>
                    <label> To do:
                        <input
                            type="text"
                            name="task"
                            placeholder="...To do"
                            onChange={this.handleChange}
                        />
                    </label>
                    <button>Add</button>
                    <button>Clear</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;
