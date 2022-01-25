import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectAuth } from "../store/auth";
import routes from "./routes";

const RequireProjectsManager = ({ children }) => {
  const { pathname } = useLocation();
  const { loggedIn, user } = useSelector(selectAuth);

  if (!loggedIn) {
    return <Navigate to={`${routes.LoginPage}?redirectTo=${pathname}`} />;
  }

  if (
    (user && user.role !== "admin") ||
    (user && user.role !== "projects-manager")
  ) {
    return <Navigate to='/page-not-found' />;
  }
  return children;
};

export default RequireProjectsManager;