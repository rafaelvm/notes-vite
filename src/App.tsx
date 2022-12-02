import { ThemeProvider } from "styled-components";
import { Form } from "../src/components/Form";
import { ToastContainer } from "react-toastify";
import theme from "./styles/theme";
import GlobalStyle from "../src/styles/global";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        closeOnClick
        theme="dark"
      />
      <div className="container">
        <Form />
      </div>
    </ThemeProvider>
  );
}

export default App;
