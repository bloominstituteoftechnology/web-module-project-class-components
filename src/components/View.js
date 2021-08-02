import React from 'react';
import { ContentContainer, HeaderContainer, ComponentContainer } from './styles/CommonStyles';

import Article from './Article';

const View = (props) => {
    return(<ComponentContainer>
        <HeaderContainer>View</HeaderContainer>
        <ContentContainer flexDirection="column">
            {
                props.articles.map(article => <Article key={article.id} {...article}/>)
            }
        </ContentContainer>
    </ComponentContainer>);
}

export default View;