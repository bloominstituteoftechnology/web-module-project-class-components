import React, { useState, useEffect } from 'react';
import { getArticle } from '../services/blogServices';
import styled from 'styled-components';

const initialArticle = {
    id:"",
    headline: "",
    author: "",
    summary: "",
    body: ""
};

const EditForm = (props)=> {
    const [article, setArticle]  = useState(initialArticle);
    const {handleEdit, editId} = props;

    useEffect(()=> {
        getArticle(editId)
            .then(article => {
                setArticle(article);
            })
    }, []);

    const handleChange = (e)=> {
        setArticle({
            ...article,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEdit(article);
    }

    return(<FormContainer onSubmit={handleSubmit}>
        <h3>Edit Article</h3>
        <div>
            <label>Headline</label>
            <input value={article.headline} id="headline" name="headline" onChange={handleChange}/>
        </div>
        <div>
            <label>Author</label>
            <input value={article.author} id="author" name="author" onChange={handleChange}/>
        </div>
        <div>
            <label>Summary</label>
            <input value={article.summary} id="summary" name="summary" onChange={handleChange}/>
        </div>
        <div>
            <label>Body</label>
            <input value={article.body} id="body" name="body" onChange={handleChange}/>
        </div>
        <Button>Edit Article</Button>
    </FormContainer>);
}

export default EditForm;

const FormContainer = styled.form`
    padding: 1em;
    width: 400px;
    background: white;

    label {
        margin-top: 0.5em;
    }

    input {
        padding: 0.5em;
    }
    
    div { 
        margin: 0.5em 0;
    }
`

const Button = styled.button`
    width: 100%;
    padding:1em;
    margin-top: 1em;
`