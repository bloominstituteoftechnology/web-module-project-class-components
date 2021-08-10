import axiosWithAuth from './../utils/axiosWithAuth';

export const getArticles = () => {
    return axiosWithAuth()
        .get('/posts')
        .then(res=> {
            return (res.data);
        });
}

export const getArticle = (id) => {
    return axiosWithAuth()
        .get(`/posts/${id}`)
        .then(res=> {
            return (res.data);
        });
}

export const editArticle = (article) => {
    return axiosWithAuth()
        .put(`/posts/${article.id}`, article)
        .then(res=>{
            return(res.data);
        });
}

export const deleteArticle = (id) => {
    return axiosWithAuth()
        .delete(`/posts/${id}`)
        .then(res=>{
            return(res.data);
        });
}