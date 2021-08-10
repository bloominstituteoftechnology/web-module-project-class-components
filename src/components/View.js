import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { getArticle, getArticles, editArticle, deleteArticle } from '../services/blogServices';
import styled from 'styled-components';
import Article from './Article';

const initialForm = {
    id:"",
    headline: "",
    author: "",
    summary: "",
    body: ""
};

const View = (props) => {
    const [showEdit] = useState(false);
    const [form, setForm]  = useState(initialForm);
    const [articles, setArticles] = useState([]);

    const { push } = useHistory();

    useEffect(()=>{
        getArticles()
            .then(articles=> {
                
                setArticles(articles);
            });
    }, [articles]);

    const handleEditSelect = (id)=> {
        getArticle(id)
            .then(article => {
                setForm(article);
            });
    }

    const handleEdit = (e) => {
        e.preventDefault();
        editArticle(form.id)
            .then(articles=> {
                setArticles(articles);
            })
    }

    const handleDelete = (id) => {
        deleteArticle(id)
            .then(articles=> {
                setForm(initialForm);
                setArticles(articles);
            })
    }

    const handleChange = (e)=> {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return(<ComponentContainer>
        <HeaderContainer>View Articles</HeaderContainer>
        <ContentContainer flexDirection="row">
            <EditContainer>
                {
                    articles.map(article => {
                        return <ArticleDivider key={article.id}>
                            <div>
                                <Article key={article.id} {...article}/>
                                <button onClick={()=> {handleEditSelect(article.id)}}>Edit</button>
                                <button onClick={()=> {handleDelete(article.id)}}>Delete</button>
                            </div>
                        </ArticleDivider>
                    })
                }
            </EditContainer>
            
            <FormContainer onSubmit={handleEdit}>
                <div>
                    <label>Headline</label>
                    <input value={form.headline} id="headline" name="headline" onChange={handleChange}/>
                </div>
                <div>
                    <label>Author</label>
                    <input value={form.author} id="author" name="author" onChange={handleChange}/>
                </div>
                <div>
                    <label>Summary</label>
                    <input value={form.summary} id="summary" name="summary" onChange={handleChange}/>
                </div>
                <div>
                    <label>Body</label>
                    <input value={form.body} id="body" name="body" onChange={handleChange}/>
                </div>
                <button>Edit Article</button>
            </FormContainer>
        </ContentContainer>
    </ComponentContainer>);
}

export default View;

const HeaderContainer = styled.h1`
    border-bottom: solid black 2px;
    padding: 0.5em;
    margin:0;
`

const Container = styled.div`
    padding: 0.5em; 
`

const EditContainer = styled.div`
    width: 70%;
    padding: 1em;
`;

const ArticleDivider = styled.div`
    border-bottom: 1px solid black;
`

const ComponentContainer = styled.div`
    display:flex;
    width: 70%;
    flex-direction: column;
    justify-content: center;
    background: grey;   
`

const ContentContainer = styled.div`
    height:100%;
    display: flex;
    flex-direction: ${props => props.flexDirection};
`

const FormContainer = styled.form`
    padding: 1em;
`

