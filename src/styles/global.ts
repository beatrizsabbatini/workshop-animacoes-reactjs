import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
    -webkit-font-smoothing: antialised;
    width: 100%;
    height: 100vh;
  }

  body, input, button{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
  }

  h1{
    color: ${({ theme }) => theme.colors.title};
    font-weight: bold;
    font-size: 4rem;
  }

  h2{
    color: ${({ theme }) => theme.colors.text};
    font-weight: 100;
    font-size: 2vw;
  }

  h3{
    color: ${({ theme }) => theme.colors.background};
    font-weight: bold;
    font-size: 1.3vw;
    cursor: pointer;
  }

  p{
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.25rem;
  }

  button{
    cursor: pointer
  }
`;
