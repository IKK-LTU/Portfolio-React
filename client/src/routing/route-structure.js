/* eslint-disable import/no-anonymous-default-export */
import {
  VISITOR,
  ADMIN,
  LOGGED_IN,
  PROJECTS_MANAGER,
  BLOG_MANAGER,
} from "./auth-types";

export default [
  {
    path: "/",
    pageName: "PageLayout",
    children: [
      {
        path: null,
        pageName: "HomePage",
      },
      {
        path: "projects-page",
        pageName: "ProjectsPage",
      },
      {
        path: "blog-page",
        pageName: "BlogsPage",
      },
      {
        path: "contacts-page",
        pageName: "BlogsPage",
      },
      {
        path: "login",
        pageName: "LoginPage",
        auth: VISITOR,
      },
      {
        path: "*",
        pageName: "ErrorPage",
      },
    ],
  },
  {
    path: "/dashboard",
    pageName: "DashboardLayout",
    children: [
      {
        path: "profile",
        pageName: "ProfilePage",
        auth: LOGGED_IN,
      },
      {
        path: "users-panel",
        pageName: "UsersPanelPage",
        auth: ADMIN,
      },
      {
        path: "projects-panel",
        pageName: "UsersPanelPage",
        auth: PROJECTS_MANAGER,
      },
      {
        path: "blogs-panel",
        pageName: "UsersPanelPage",
        auth: BLOG_MANAGER,
      },
    ],
  }
];