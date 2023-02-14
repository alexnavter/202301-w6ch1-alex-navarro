import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, 
*:after,
*:before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  }
#root{
  display:flex;
  flex-direction: column;
}
body {
  padding: 20px;
  background-color: #fff;
  font-family: "Inter", sans-serif;
  width: 100%;
  min-height: 100vh;
  
}
ol, ul, li {
  list-style: none;
}
`;

export default GlobalStyles;
