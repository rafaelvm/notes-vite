import { ThemeProvider } from "styled-components";
import { Form } from "../src/components/Form";
import theme from "../src/styles/theme";
import GlobalStyle from "../src/styles/global";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
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
