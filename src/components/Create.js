import React, { useState, useEffect } from 'react';
import axiosWithAuth from './../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

import { Container, FormContainer, ContentContainer, HeaderContainer, ComponentContainer } from './styles/CommonStyles';
import styled from 'styled-components';

const initialForm = {
    headline:"",
    author:"",
    summary:"",
    body:""
}

const Create = () => {
    const [form, setForm] = useState(initialForm);
    
    const { push } = useHistory();

    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        axiosWithAuth()
            .get('/posts')
            .then(res=> {
                console.log(res.data);
                setArticles(res.data);
            })
            .catch(err=>{
                push('/login');
            });
    }, []);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/posts', form)
            .then(res=> {
                setArticles(res.data);
                setForm(initialForm);
            })
            .catch(err=>{
                console.log(err);
            })
    }

    return(<ComponentContainer>
        <HeaderContainer>Create</HeaderContainer>
        <ContentContainer flexDirection="row">
            <FormContainer>
                <div>
                    <label>Headline</label>
                    <input name="headline" value={form.headline} onChange={handleChange} value={form.headline}/>
                </div>
                <div>
                    <label>Author</label>
                    <input name="author" value={form.author} onChange={handleChange} value={form.author}/>
                </div>
                <div>
                    <label>Summary</label>
                    <input name="summary" value={form.summary} onChange={handleChange} value={form.summary}/>
                </div>
                <div>
                    <label>Body</label>
                    <input name="body" value={form.body} onChange={handleChange} value={form.body}/>
                </div>
                <button onClick={handleClick}>Add Article</button>
            </FormContainer>

            <Container>
                {
                    articles.map(article => <div>
                        <h4>{article.headline}</h4>
                    </div>)
                }
            </Container>
        </ContentContainer>
    </ComponentContainer>);
}

export default Create;