import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/lightTheme";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import PageLayout from "./components/layouts/page-layout";
import HomePage from "./pages/home-page.jsx";
import ProjectsPage from "./pages/projects-page";
import BlogPage from "./pages/blog-page";
import ContactsPage from "./pages/contacts-page";
const { lightTheme } = theme;

const App = () => {
  return (
    <CssBaseline>
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<PageLayout />}>
                <Route index element={<HomePage />} />
                <Route path='/projects-page' element={<ProjectsPage />} />
                <Route path='/blog-page' element={<BlogPage />} />
                <Route path='/contacts-page' element={<ContactsPage />} />
              </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </CssBaseline>
  );
};

export default App;
