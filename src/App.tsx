import { ThemeProvider } from "styled-components";
import { Form } from "../src/components/Form";
import theme from "../src/styles/theme";
import GlobalStyle from "../src/styles/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="container">
        <Form />
      </div>
    </ThemeProvider>
  );
}

export default App;
