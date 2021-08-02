import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  padding: 1rem;
  background-color: #333333;
  color:white;
  font-weight: bold;
  text-align: right;
  font-family: "Arial";
`

const LambdaHeader = () => {
    return(
    <StyledHeader>
        <div>Sprint Challenge 3.3</div>
    </StyledHeader>);
}

export default LambdaHeader;