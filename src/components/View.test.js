import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import articleService from './../services/articleServices';
import View from './View';

jest.mock('./../services/articleServices');

test("renders articles without errors", async ()=> {
    articleService.mockResolvedValueOnce([
        {
            id: "V-hF7",
            author: "",
            body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home.",
            createdOn: "2021-08-26T10:06:16-04:00",
            headline: "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",            
            image: 134,
            summary: "Triple-digit temperatures led to a spike in demand across the region."
        }
    ]);
    
    render(<View/>);
    const articles = await screen.findAllByTestId("article");
    expect(articles).toHaveLength(1);
});