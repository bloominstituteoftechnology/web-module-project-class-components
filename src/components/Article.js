import React from 'react';
import moment from 'moment';
import { ArticleStyle, Container } from './styles/CommonStyles';;

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