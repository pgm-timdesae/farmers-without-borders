import { createGlobalStyle } from "styled-components";

import BaskervilleWoff from "./libre-baskerville.woff";
import BaskervilleWoff2 from "./libre-baskerville.woff2";
import BaskervilleBoldWoff from "./libre-baskerville-bold.woff";
import BaskervilleBoldWoff2 from "./libre-baskerville-bold.woff2";

export default createGlobalStyle` 
  @font-face {
    font-family: 'Libre Baskerville';
    src: local('Libre Baskerville'),
    url(${BaskervilleWoff}) format('woff'),
    url(${BaskervilleWoff2}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Libre Baskerville';
    src: local('Libre Baskerville'),
    url(${BaskervilleBoldWoff}) format('woff'),
    url(${BaskervilleBoldWoff2}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }
`;
