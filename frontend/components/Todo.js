import React from 'react'
import styled from 'styled-components';

const StyledToDo = styled.div`
  .finished{
    text-decoration: line-through;
    color: red;
  }
`
export default class Todo extends React.Component {

  handleClick = () => {
    this.props.handleToggle(this.props.item);
  }

  render() {
    return (
      <StyledToDo onClick={this.handleClick} >
        <p className={this.props.item.completed ? "finished" : ""}>{this.props.item.name}</p>
      </StyledToDo>
    )
  }
}
