import { createTheme } from "@mui/material/styles";
import "./fonts.css";

const chivoFont = createTheme({
  typography: {
    fontFamily: [
      `ChivoRegular`,
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
    color: "#79815E",
  },
});
const poppinsFont = createTheme({
  typography: {
    fontFamily: [
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
    color: "#79815E",
  },
});

const theme = { chivoFont, poppinsFont}
export default theme;