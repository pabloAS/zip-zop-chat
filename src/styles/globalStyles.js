import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
	  padding: 0;
	  border: 0;
    box-sizing: border-box;
    outline: 0 none;
    list-style: none;
    button{
      cursor: pointer;
      font-family: 'Ubuntu', sans-serif;

    }
    body{
      width: 100vw;
      height: 100vh;
      display: flex;
			flex-direction: column;
      font-family: 'Ubuntu', sans-serif;

    }
  }


`;
