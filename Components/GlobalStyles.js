import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {

    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: white;
    background: black;
  
}

a {
  color: inherit;
  text-decoration: none;
}



`;

export default GlobalStyle;
