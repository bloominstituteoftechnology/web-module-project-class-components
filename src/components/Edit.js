import React from 'react';
import { Container, FormContainer, ContentContainer, HeaderContainer, ComponentContainer } from './styles/CommonStyles';

import styled from 'styled-components';

const EditContainer = styled.div`
    width: 500px;
    padding: 1em;
`;

const ArticleDivider = styled.div`
    border-bottom: 1px solid black;
`

const Edit = (props) => {
    return(<ComponentContainer>
        <HeaderContainer>Edit</HeaderContainer>
        <ContentContainer flexDirection="row">
            <EditContainer>
                {
                    props.articles.map(article => {
                        return <ArticleDivider key={article.id}>
                            <div>
                                <h3>Post {article.id}</h3>
                                <h4>{article.headline.substr(0, 45) + `...`}</h4>
                                <p>Created {article.createdOn}</p>
                            </div>
                            <div>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </ArticleDivider>
                    })
                }
            </EditContainer>

            <FormContainer>
                <div>
                    <label>Title</label>
                    <input/>
                </div>
                <div>
                    <label>Author</label>
                    <input/>
                </div>
                <div>
                    <label>Summary</label>
                    <input/>
                </div>
                <div>
                    <label>Body</label>
                    <input/>
                </div>
                <button>Edit Article</button>
            </FormContainer>
        </ContentContainer>
    </ComponentContainer>);
}

export default Edit;