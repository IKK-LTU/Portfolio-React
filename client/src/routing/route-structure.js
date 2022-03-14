/* eslint-disable import/no-anonymous-default-export */
import {
  VISITOR,
  // ADMIN,
  LOGGED_IN,
  // PROJECTS_MANAGER,
  // BLOG_MANAGER,
} from "./auth-types";

export default [
  {
    path: "/",
    pageName: `PageLayout`,
    children: [
      {
        path: null,
        pageName: "HomePage",
        auth: VISITOR,
      },
      {
        path: "projects-page",
        pageName: "ProjectsPage",
        auth: VISITOR,
      },
      {
        path: "blog-page",
        pageName: "BlogPage",
        auth: VISITOR,
      },
      {
        path: "admin",
        pageName: "LoginPage",
        auth: VISITOR,
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
        auth: VISITOR,
      },
    ],
  },
  {
    path: "/dashboard",
    pageName: "DashboardLayout",
    auth: LOGGED_IN,
    children: [
      {
        path: null,
        pageName: "ProfilePage",
        auth: LOGGED_IN,
      },
      {
        path: "users-panel",
        pageName: "UsersManagerPage",
        auth: LOGGED_IN,
      },
      {
        path: "projects-panel",
        pageName: "ProjectsManagerPage",
        auth: LOGGED_IN,
      },
      {
        path: "blog-panel",
        pageName: "BlogsManagerPage",
        auth: LOGGED_IN,
      },
    ],
  },
];
