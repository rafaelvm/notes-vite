import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.container {
  display: flex;
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
