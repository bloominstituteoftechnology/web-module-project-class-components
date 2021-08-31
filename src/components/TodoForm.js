import React from 'react'
import styled from 'styled-components'

class TodoForm extends React.Component {
    constructor() {
      super();
      this.state = {
        input:""
      }
    }
  
    handleChanges = e => {
      this.setState({
        input: e.target.value
      })
    };

    handleClick = e => {
      e.preventDefault();
      if( this.state.input.length > 1){
      this.props.handleAdd(this.state.input);
      this.setState({
        input: ''
      })
    }
    }
  
    render() {
      return (
          <StyledInput>
        <form>
          <input type="text" name="todo" placeholder='    type a task...' onChange={this.handleChanges} value={this.state.input}/>
          <button onClick={this.handleClick}>Add</button>
        </form>
        </StyledInput>
      );
    }
  }
  
  export default TodoForm;

  const StyledInput = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    form{
        display: flex;
    justify-content: center;
        width:100%;
    }
    input{
        height: 2rem;
        width: 60%;
        border-radius: 2rem;
        margin-right: 2%;
    }
    button{
        border-radius: 3rem;
        background: #93ff00 ;
        border: none;
        box-shadow: 
   inset 0 0 20px darkgreen;
        font-size: 1.2rem;
        font-family: 'Teko', sans-serif;
        width: 10%;
    }
  `