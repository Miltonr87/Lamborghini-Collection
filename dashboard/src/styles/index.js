import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-weight: 300;
    width: 100%;
    height: 100%;
    transition: all 0.50s linear;
  }
`;