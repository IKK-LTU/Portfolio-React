import React from "react";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "../../navBars/loggedInUsersNavBar/navbar";

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  boxSizing: "border-box",
  height: "100vh",
  width: "100%",
  paddingTop: "60px",
  [theme.breakpoints.up("sm")]: {
    width: "90%",
    paddingTop: "70px",
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "100px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "100vw",
    maxWidht: "100vw",
    paddingTop: "100px",
    margin: "auto",
  },
}));

const Layout = () => {
  return (
    <>
      <NavBar />
      <StyledContainer>
        <Outlet />
      </StyledContainer>
    </>
  );
};

export default Layout;
