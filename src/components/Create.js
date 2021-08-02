import React from 'react';
import { Container, FormContainer, ContentContainer, HeaderContainer, ComponentContainer } from './styles/CommonStyles';
import styled from 'styled-components';

const Create = () => {
    return(<ComponentContainer>
        <HeaderContainer>Create</HeaderContainer>
        <ContentContainer flexDirection="row">
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
                <button>Add Article</button>
            </FormContainer>

            <Container>
                <p>Preview</p>
                <h1>Title</h1>
                <img src=""/>
                <div>
                    <p>By Hallie Golden</p>
                    <p>Posted June 23, 2021</p>
                </div>
                <p>
                    Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home.
                </p>
            </Container>
        </ContentContainer>
    </ComponentContainer>);
}

export default Create;