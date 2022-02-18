import PageLayout from "../components/layouts/page-layout";
import HomePage from "../pages/home-page";
import ProjectsPage from "../pages/projects/projects-page";
import BlogPage from "../pages/blog-page";
import ContactsPage from "../pages/contacts-page";
import LoginPage from "../pages/login-page";
// import RegisterPage from "../pages/register-page";
// import DashboardLayout from "../components/layouts/dashboard-layout";
import ErrorPage from "../pages/error-page";
import ProfilePage from "../pages/dashboard/dashboard-page_profile";
import BlogManagerPage from "../pages/dashboard/dashboard-page_blog";
import ProjectsManagerPage from "../pages/dashboard/dashboard-page_projects";
import UsersPanelPage from "../pages/dashboard/dashboard-page_usersPanel";
import PageLayoutDark from "../components/layouts/page-layout_darkTheme";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  PageLayout,
  HomePage,
  ContactsPage,
  ProjectsPage,
  BlogPage,
  LoginPage,
  // RegisterPage,
  PageLayoutDark,
  ErrorPage,
  ProfilePage,
  UsersPanelPage,
  ProjectsManagerPage,
  BlogManagerPage,
  //   DashboardLayout,
};
