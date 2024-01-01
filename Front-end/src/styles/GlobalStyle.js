import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  background-color: #0A0A10;
  }
  button{
    cursor: pointer;
  }
  #root{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
