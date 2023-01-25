import { ThemeProvider } from "styled-components";
import { Router } from "../src/router";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "../src/context/Auth";
import { NavBar } from "./components/NavBar";
import theme from "./styles/theme";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          closeOnClick
          theme="dark"
        />
        <div className="container">
          <NavBar />
          <Router />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
