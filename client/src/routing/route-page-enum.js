import PageLayout from "../components/layouts/page-layout/page-layout";
import HomePage from "../pages/public-pages/home-page";
import ProjectsPage from "../pages/public-pages/projects/projects-page";
import BlogPage from "../pages/public-pages/blog-page";
import ContactsPage from "../pages/public-pages/contacts-page";
import LoginPage from "../pages/visitor-pages/loginPage";
import RegistrtationPage from "../pages/visitor-pages/registrationPage";
// import RegisterPage from "../pages/register-page";
import DashboardLayout from "../components/layouts/dashboard-layout/layout";
import ErrorPage from "../pages/public-pages/error-page";
import ProfilePage from '../pages/logged-in-pages/page_profile'
import PageLayoutDark from "../components/layouts/page-layout/page-layout_darkTheme";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  PageLayout,
  HomePage,
  ContactsPage,
  ProjectsPage,
  BlogPage,
  LoginPage,
  RegistrtationPage,
  PageLayoutDark,
  ErrorPage,
  ProfilePage,
  // UsersPanelPage,
  // ProjectsManagerPage,
  // BlogManagerPage,
    DashboardLayout,
};
