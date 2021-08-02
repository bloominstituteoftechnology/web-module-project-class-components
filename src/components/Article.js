import React from 'react';
import { ArticleStyle, Container } from './styles/CommonStyles';;

const Article = (props)=> {
    return(<ArticleStyle>
        <Container>
            <p>{props.createdOn}</p>
            <p>By {props.author}</p>
            <img src={props.image}/>
        </Container>
        <Container>
            <h1>{props.headline}</h1>
            <h3>{props.summary}</h3>
            <p>{props.body}</p>
        </Container>
    </ArticleStyle>);
}

export default Article;