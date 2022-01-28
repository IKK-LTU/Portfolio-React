import {createSlice} from "@reduxjs/toolkit";

const initialState = {
      name: "light",
      text: "#343434",
      textHover: "#79815E",
      backgroundCol: "#FEFEFE",
    
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    turnLightTheme(state) {
      state.name = "light";
      state.text = "#343434";
      state.textHover = "#79815E";
      state.backgroundCol = "#FEFEFE";
    },
    turnDarkTheme(state) {
      state.name = "dark";
      state.text = "#fff";
      state.textHover = "#79815E";
      state.backgroundCol = "#343434";
    },
  },
});

export const { turnLightTheme, turnDarkTheme } = themeSlice.actions;

export const selectTheme = (state) => state.theme;

export default themeSlice.reducer;