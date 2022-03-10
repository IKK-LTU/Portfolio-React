import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import theme from "./theme";
import users from "./users";

const store = configureStore({
  reducer: {
    auth,
    theme,
    users,
  },
});

export default store;
