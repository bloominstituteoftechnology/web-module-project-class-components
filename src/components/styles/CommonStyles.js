import styled from 'styled-components';

const Container = styled.div`
    padding: 0.5em; 
`

const FormContainer = styled.form`
    padding: 1em;
`

const ComponentContainer = styled.div`
    display:flex;
    width: 70%;
    flex-direction: column;
    justify-content: center;
    background: grey;
    
`
const ArticleStyle = styled.div`
    display: flex;
    flex-direction: row;
`
const HeaderContainer = styled.h2`
    padding: 0.5em;
    border-bottom: 2px solid black;
`
const ContentContainer = styled.div`
    height:100%;
    display: flex;
    flex-direction: ${props => props.flexDirection};
`

export {
    Container,
    ArticleStyle,
    ComponentContainer,
    HeaderContainer,
    ContentContainer,
    FormContainer
}