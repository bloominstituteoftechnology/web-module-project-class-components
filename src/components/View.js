import React, {useState, useEffect} from 'react';
import { ContentContainer, HeaderContainer, ComponentContainer } from './styles/CommonStyles';

import Article from './Article';
import axiosWithAuth from './../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const View = () => {
    const [articles, setArticles] = useState([]);
    const { push } = useHistory();

    useEffect(()=>{
        const token = localStorage.getItem('token');
        axiosWithAuth()
            .get('/posts')
            .then(res=> {
                setArticles(res.data);
            })
            .catch(err=>{
                push('/login');
            });
    }, []);

    return(<ComponentContainer>
        <HeaderContainer>View</HeaderContainer>
        <ContentContainer flexDirection="column">
            {
                articles.map(article => <Article key={article.id} {...article}/>)
            }
        </ContentContainer>
    </ComponentContainer>);
}

export default View;

//1. Build service code on mount.
//2. Build axiosWithAuth
//3. Redirect to '/login' if there is an auth error