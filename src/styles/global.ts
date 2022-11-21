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



button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.2;
  cursor: not-allowed;

  &:hover {
    opacity: 0.2;
  }
}
::-webkit-scrollbar {
  width: 8px;
  background: #FFFFFF;
  border-radius: 8px;
}
::-webkit-scrollbar-track {
  background-color: #FFFFFF;
}
::-webkit-scrollbar-thumb {
  background: #D1D3D7;
  border-radius: 8px;
}

.container {
  margin: 12px;
}

`;

export default GlobalStyle;
