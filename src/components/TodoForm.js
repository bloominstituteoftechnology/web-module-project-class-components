import React from "react";

class ToDoForm extends React.Component {
    constructor(){
        super();
        this.state ={
            input:''
        }
    }
    handleChanges = e => {
        this.setState({
            ... this.state,
            input: e.target.value
        });
    };
    handleSubmit = (e)=>{
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChanges} type='text' name= "item"/>
                <button>Add</button>
            </form>
        );
    }
}

export default ToDoForm