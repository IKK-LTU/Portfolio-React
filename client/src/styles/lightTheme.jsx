import { createTheme } from "@mui/material/styles";
import "./fonts.css";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#79815E",
    },
    secondary: {
      main: "#999768",
    },
    text: {
      secondary: "#575757",
      hint: "#79815E",
    },
    success: {
      main: "#70e874",
    },
    info: {
      main: "#0b77bf",
    },
    background: {
      default: "#000",
      paper: "#000",
    },
  },
  typography: {
    fontFamily: [
      `ChivoRegular`,
      `PoppinsRegular`,
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme;
