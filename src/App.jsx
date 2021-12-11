import React from "react";
import { CssBaseline, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import SideBar from "./components/sideBar/sideBar";
import theme from "./styles/fonts";

const {chivoFont} = theme;

const App = () => {
  return (
    <CssBaseline>
      <ThemeProvider theme={chivoFont}>
        <SideBar />
        <Container sx={{marginLeft:"20%"}}>nanfdgdfgan</Container>
      </ThemeProvider>
    </CssBaseline>
  );
};

export default App;
