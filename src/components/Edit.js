import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import { Container, FormContainer, ContentContainer, HeaderContainer, ComponentContainer } from './styles/CommonStyles';
import axiosWithAuth from './../utils/axiosWithAuth';

import styled from 'styled-components';

const EditContainer = styled.div`
    width: 300px;
    padding: 1em;
`;

const ArticleDivider = styled.div`
    border-bottom: 1px solid black;
`

const initialForm = {
    id:"",
    headline: "",
    author: "",
    summary: "",
    body: ""
};

const Edit = (props) => {
    const [form, setForm]  = useState(initialForm);

    const [articles, setArticles] = useState([]);
    const { push } = useHistory();

    useEffect(()=>{
        axiosWithAuth()
            .get('/posts')
            .then(res=> {
                setArticles(res.data);
            })
            .catch(err=>{
                push('/login');
            });
    }, [articles]);

    const handleEditSelect = (id)=> {
        axiosWithAuth()
            .get(`/posts/${id}`)
            .then(res=> {
                setForm(res.data);
            })
            .catch(err=> {
                console.log(err);
            });
    }

    const handleChange = (e)=> {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/posts/${form.id}`, form)
            .then(res=> {
                setArticles(res.data);
            })
            .catch(err=> {
                console.log(err);
            })
    }

    const handleDelete = (id) => {
        axiosWithAuth()
            .delete(`/posts/${id}`)
            .then(res=> {
                setForm(initialForm);
            })
            .catch(err=> {
                console.log(err);
            })
    }

    return(<ComponentContainer>
        <HeaderContainer>Edit</HeaderContainer>
        <ContentContainer flexDirection="row">
            <EditContainer>
                {
                    articles.map(article => {
                        return <ArticleDivider key={article.id}>
                            <div>
                                <h3>Post {article.id}</h3>
                                <h4>{article.headline.substr(0, 45) + `...`}</h4>
                                <p>Created {article.createdOn}</p>
                            </div>
                            <div>
                                <button onClick={
                                    ()=> {handleEditSelect(article.id)}
                                }>Edit</button>
                                <button onClick={
                                    ()=> {handleDelete(article.id)}
                                }>Delete</button>
                            </div>
                        </ArticleDivider>
                    })
                }
            </EditContainer>

            <FormContainer onSubmit={handleSubmit}>
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

export default Edit;