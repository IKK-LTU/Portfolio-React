import React from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import SideBar from "./components/sideBar/sideBar";
import LandingpageContainer from "./pages/home-page.jsx";
import ProjectsContainer from "./pages/projects-page";
import theme from "./styles/lightTheme";
import PageLayout from "./components/layouts/page-layout";
const { lightTheme } = theme;

const App = () => {
  return (
    <CssBaseline>
      <ThemeProvider theme={lightTheme}>
        <SideBar sx={{ position: "sticky" }} />
        <PageLayout
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "100vh",
            width: "100%",
          }}>
          <LandingpageContainer />
        </PageLayout>
        <PageLayout
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
        </PageLayout>
      </ThemeProvider>
    </CssBaseline>
  );
};

export default App;
