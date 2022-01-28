/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import SessionStorage from "../libs/SessionStorage";

const initialState = SessionStorage.get("auth") ?? {
  loggedIn: false,
  token: null,
  user: null,
  redirectTo: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, { payload }) {
      state.loggedIn = true;
      state.redirectTo = payload.redirectTo;
      SessionStorage.set("auth", state);
    },
    logout(state) {
      state.loggedIn = false;
      state.redirectTo = null;
      SessionStorage.clear("auth");
    }
  },
});
export const { loginSuccess, logout } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;

