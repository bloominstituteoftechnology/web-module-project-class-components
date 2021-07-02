import React, { Component } from 'react'

export class TodoForm extends Component {
    constructor(){
        super();
        this.state={
            itemText: ""
        }
    }
    clickHandler = event => {
       this.setState({
           itemText: event.target.value
       })
        
        
      };
      submitHandle = event =>{
          event.preventDefault();
         this.props.addItem(this.state.itemText)
      }

      deleteItem = event => {
          event.preventDefault();
          console.log(event.target.value)
          this.props.deleteItem(this.state.itemText.id)
      }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandle}> 
                <label htmlFor="inputName"> Name :
                 <input type="text" name="inputName" value={this.state.itemText} placeholder="first name" onChange={this.clickHandler}/>
               </label>
                <button>Click Me</button>
                <button onClick={this.deleteItem}>Remove Item</button>
            </form>
           
            </div>
        )
    }
}

export default TodoForm
