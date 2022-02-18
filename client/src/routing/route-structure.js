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
    pageName: `PageLayout`,
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
        pageName: "BlogPage",
      },
      {
        path: "admin",
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
    path: "/",
    pageName: `PageLayoutDark`,
    children: [
      {
        path: "contacts-page",
        pageName: "ContactsPage",
      },
    ],
  },
  {
    path: "/dashboard",
    pageName: "PageLayout",
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
        pageName: "ProjectsManagerPage",
        auth: PROJECTS_MANAGER,
      },
      {
        path: "blog-panel",
        pageName: "BlogManagerPage",
        auth: BLOG_MANAGER,
      },
    ],
  },
];
