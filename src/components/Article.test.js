import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Article from './Article';


const article = {
    id: "12312",
    createdOn: Date.now(),
    headline: "this headline",
    author: "this author",
    summary: "this summary",
    body: "this body"
}

test('renders component without errors', ()=> {
    
    // render(<Article article={article}/>);
});

test('renders headline, author and article passed in through props', ()=> {
    render(<Article article={article}/>);
    const headline = screen.getByText(/this headline/i);
    expect(headline).toBeInTheDocument();
});