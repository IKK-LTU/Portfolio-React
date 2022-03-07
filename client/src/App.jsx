import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/lightTheme";
import Router from "./routing/router";
import store from "./store/index";

const App = () => {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <Router />
        </ReduxProvider>
      </ThemeProvider>
    </CssBaseline>
  );
};

export default App;

