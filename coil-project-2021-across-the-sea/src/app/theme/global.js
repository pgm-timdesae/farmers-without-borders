import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.darkGreen};
    font-family: 'Lato', serif;  
    overflow-x: hidden;
  }
  
  h1,
  h2,
  h3 {
    font-family: 'Libre Baskerville', serif;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.large};
    line-height: 1.2;
    font-weight: 400;
    text-align: center;
    margin-bottom: ${({ theme }) => theme.margins.small};

    @media (min-width: ${({ theme }) => theme.width.tablet}) {
      font-size: ${({ theme }) => theme.fontSizes.large};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: ${({ theme }) => theme.margins.small};

    @media (min-width: ${({ theme }) => theme.width.tablet}) {
      font-size: ${({ theme }) => theme.fontSizes.medium};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.normal};
    line-height: 1.2;

    @media (min-width: ${({ theme }) => theme.width.tablet}) {
      font-size: ${({ theme }) => theme.fontSizes.normal};
    }
  }

  ul {
    list-style: none;
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.normal};
    line-height: 1.5;
  }

  input {
    display: block;
    border: 1px solid ${({ theme }) => theme.colors.primaryGreen};
    margin-top: ${({ theme }) => theme.margins.extraSmall};
    margin-bottom: ${({ theme }) => theme.margins.extraSmall};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    padding: 0.5rem 1rem;
  }

  label {
    display: inline-block;
    margin-top: ${({ theme }) => theme.margins.small};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.normal};
    font-size: ${({ theme }) => theme.fontSizes.normal};
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGreen};
  }

  img {
    width: 100%;
  }

  input, textarea {
    font-family: 'Lato';
    font-size: ${({ theme }) => theme.fontSizes.small};
  }

  button {
    font-family: 'Lato';
    font-size: ${({ theme }) => theme.fontSizes.btn};
  }
`;

export default GlobalStyles;