import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* { 
  margin: 0; 
  padding: 0;
  box-sizing: border-box;
  height: auto;
}

html { 
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }
  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}

.container {
  margin: 12px;
}

:root {
  --primary: #58a4b0;
  --secondary: #373f51;
  --secondary-active: #cccccc;
  --bottom: #ffffff;
  --bottom-details: #ececec;
}

`;

export default GlobalStyle;
