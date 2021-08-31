import React, {Component} from 'react';

import './Todo.css'




class ToDoForm extends Component {
    constructor(){
        super();
        this.state = {
            input:''
        }
    }

    onChange = e =>{
        this.setState({
            input: e.target.value
        })
    }


    submit = e =>{
        e.preventDefault();
        this.props.addTask(this.state.input)
    }

    clear = () =>{
        this.props.clearTask();
    }

  
    render() {
      return (
        <div>
          <form>

              <input
                name='text-box'
                type='text'
                placeholder='...todo'
                onChange={this.onChange}
              />

              <input
                name='submit'
                type='submit'
                value='Add ToDo'
                onClick={this.submit}
              />

              <input 
                name='clear'
                type='button'
                value='Clear Completed'
                onClick={this.clear}
              />

          </form>
        </div>
      );
    }
  }
  
  export default ToDoForm;