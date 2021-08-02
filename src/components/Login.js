import React from 'react';
import styled from 'styled-components';

const ComponentContainer = styled.div`
    height: 70%;
    justify-content: center;
    align-items: center;
    display:flex;
`

const ModalContainer = styled.div`
    width: 500px;
    background: white;
    padding: 2rem;
    text-align: center;
`

const Label = styled.label`
    display: block;
    text-align: left;
    font-size: 1.5rem;
`

const FormGroup = styled.div`
    padding:1rem;
`

const Input = styled.input`
    font-size: 1rem;
    padding: 1rem 0;
    width:100%;
`

const Button = styled.button`
    padding:1rem;
    width: 100%;
`

const Login = () => {
    return(<ComponentContainer>
        <ModalContainer>
            <h1>Welcome to Blogger Pro</h1>
            <h2>Please enter your account information.</h2>
            <form>
                <FormGroup>
                    <Label>Username</Label>
                    <Input/>
                </FormGroup>

                <FormGroup>
                    <Label>Password</Label>
                    <Input/>
                </FormGroup>

                <Button>Login</Button>
            </form>
        </ModalContainer>
    </ComponentContainer>);
}

export default Login;