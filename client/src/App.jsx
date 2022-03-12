import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/lightTheme";
import Router from "./routing/router";
import store from "./store/index";
import DataProvider from "./pages/public-pages/context/data-context";
const App = () => {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <DataProvider>
            <Router />
          </DataProvider>
        </ReduxProvider>
      </ThemeProvider>
    </CssBaseline>
  );
};

export default App;