import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Article = (props)=> {
    const {article, handleDelete, handleEditSelect} = props;

    return(<div>
        <ArticleStyle>
            <Container>
                <p>{moment(article.createdOn).format("ddd, MMM Do YYYY")}</p>
                <p>By {article.author || "Associated Press"}</p>
                <img src="http://via.placeholder.com/150"/>
            </Container>
            <Container>
                <h1>{article.headline}</h1>
                <h3>{article.summary}</h3>
                <p>{article.body}</p>
            </Container>
        </ArticleStyle>
        
        <ButtonContainer>
            <button onClick={()=> {handleDelete(article.id)}}>Delete</button>                
            <button onClick={()=> {handleEditSelect(article.id)}}>Edit</button>
        </ButtonContainer>
    </div>);
}

export default Article;


const ArticleStyle = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0.5em; 
    background: grey;
`

const Container = styled.div`
    padding: 0.5em; 
`

const ButtonContainer = styled.div`
    padding: 1em;
    text-transform: uppercase;
    text-align:right;

    button {
        width: 100px;
        padding:0.5em;
    }
`