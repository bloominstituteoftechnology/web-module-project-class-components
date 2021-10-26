import React from "react";
class TodoForm extends React.Component{
    constructor() {
        super();
        this.state = {
          input:""
        }
      }

      handleChanges = e => {
        this.setState({
          ...this.state,
          input: e.target.value
        });
      };

      handleSubmit = (e)=>{
        e.preventDefault();
        this.props.handleAddItem(this.state.input);
      }
    
    render (){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChanges} type="text" name="item"/>
                    <button type='submit'>Add Todo</button>
                </form>
                <button onClick={this.props.handleClear}>Clear Completed</button>
            </div>
        );
    }
}

export default TodoForm;