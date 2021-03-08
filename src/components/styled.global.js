import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: ${props => props.theme.darkBackground};
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    h2 {
        color: ${props => props.theme.lightText};
        text-align: center;
        margin: 1rem;
    }
`

export default GlobalStyle