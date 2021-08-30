import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    width:100%;
`


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <StyledApp>
        <h2>Welcome to your Todo App!</h2>
      </StyledApp>
    );
  }
}

export default App;
