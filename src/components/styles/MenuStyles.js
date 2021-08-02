import styled from 'styled-components';

const StyledHeader = styled.div`
    padding: 1rem;
    background-color: #daa1ac;
    display:flex;
    align-items: center;
    justify-content: space-between;
`

const StyledMenu = styled.ul`
  li {
        display: inline-block;
        padding: 0.3rem 1rem;
        
        a {
            text-decoration: none;
        }
    }
`

export {
    StyledHeader,
    StyledMenu
}