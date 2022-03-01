import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideBar from "../sideBar/sideBar";

const StyledContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  width: "100vw",
  background: "#000000 linear-gradient(315deg, #2d3436 0%, #000000 74%)",
  color: "white",

  [theme.breakpoints.up("sm")]: {},

  [theme.breakpoints.up("md")]: {
    padding: 0,
  },
  [theme.breakpoints.up("lg")]: {
    height: "100vh",
    padding: 0,
  },
}));

const PageLayoutDark = () => (
  <StyledContainer>
    <SideBar sx={{ position: "sticky" }} />
    <Outlet />
  </StyledContainer>
);

export default PageLayoutDark;
