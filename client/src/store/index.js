import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import theme from "./theme";
import users from "./users";
import projects from "./projects";

const store = configureStore({
  reducer: {
    auth,
    theme,
    users,
    projects,
  },
});

export default store;
