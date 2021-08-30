import React from "react";
import styled from 'styled-components';

const StyledForm = styled.div`
form{
    display:flex;
    flex-direction:column;
    justify-content: center;
    border-radius:10px;
   }
   input{
    border-radius:10px;
   }
   button{
    border-radius:10px;
   }
`



class TodoForm extends React.Component {
    constructor(){
        super();
        this.state ={
            input:''
        }
    }

    Changes = evt => {
        this.setState({
            input: evt.target.value
        });
    };

    Click = evt => {
        evt.preventDefault();
        this.props.Add(this.state.input);
        this.setState({
            input: ''
        });
    }

    render() {
        return (
           <StyledForm>
            <form>
                <input 
                type='text'
                name='item'
                onChange={this.Changes}
                value={this.state.input}
                />
                <button
                 onClick={this.Click}
                 >Add
                     </button>
            </form>
           </StyledForm>
        );
    }
}

export default TodoForm