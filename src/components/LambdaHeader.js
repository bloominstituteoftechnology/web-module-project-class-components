import React from 'react';
import styled from 'styled-components';


const LambdaHeader = () => {
    return(
    <HeaderStyle>
        <div>Sprint Challenge 3.3</div>
    </HeaderStyle>);
}

export default LambdaHeader;

const HeaderStyle = styled.div`
  padding: 1rem;
  background-color: #333333;
  color:white;
  font-weight: bold;
  text-align: right;
  font-family: "Arial";
`