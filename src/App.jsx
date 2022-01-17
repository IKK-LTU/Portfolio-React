import React from "react";
import { CssBaseline, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import SideBar from "./components/sideBar/sideBar";
import LandingpageContainer from "./pages/landingPageContainer";
import ProjectsContainer from "./pages/projectsContainer";
import theme from "./styles/fonts";

const { chivoFont } = theme;

const App = () => {
  return (
    <CssBaseline>
      <ThemeProvider theme={chivoFont}>
        <SideBar sx={{ position: "sticky" }} />
        <Container
          maxWidth
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "100vh",
            width: "80%",
          }}>
          <LandingpageContainer />
        </Container>
        <Container
          maxWidth
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "100vh",
            width: "100%",
            background:
              "linear-gradient(180deg, rgba(244, 244, 245, 0.9) 0%, #FFFFFF 22.54%, rgba(255, 255, 255, 0.682692) 78.32%, #F4F4F5 100%), #FFFFFF",
          }}>
          <ProjectsContainer />
        </Container>
      </ThemeProvider>
    </CssBaseline>
  );
};

export default App;
