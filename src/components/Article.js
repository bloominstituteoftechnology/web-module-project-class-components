import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Article = (props)=> {
    return(<ArticleStyle>
        <Container>
            <p>{moment(props.createdOn).format("ddd, MMM Do YYYY")}</p>
            <p>By {props.author}</p>
            <img src="http://via.placeholder.com/150"/>
        </Container>
        <Container>
            <h1>{props.headline}</h1>
            <h3>{props.summary}</h3>
            <p>{props.body}</p>
        </Container>
    </ArticleStyle>);
}

export default Article;


const ArticleStyle = styled.div`
    display: flex;
    flex-direction: row;
`

const Container = styled.div`
    padding: 0.5em; 
`