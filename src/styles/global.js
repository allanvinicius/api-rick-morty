import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    list-style: none;
    text-decoration: none;
    margin: 0;
    padding: 0;
    text-align: left;
    border: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    color: #FFFF;
    font-family: 'Inter', sans-serif;
}

body {
    background-color: #040011;
}

button {
    background: transparent;
    cursor: pointer;
}

html {
    font-size: 62.5%;
}

img {
    display: block;
    max-width: 100%;
}

a,
span,
small {
  display: block;
}

input,
button,
textarea {
    appearance: none;
}

.container {
  width: 100%;
  max-width: 124.6rem;
  padding: 0 1.5rem;
  margin: 0 auto;
}
`
