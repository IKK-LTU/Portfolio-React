import React from "react";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "../../navBars/loggedInUsersNavBar/navbar";

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  boxSizing:'border-box',
  height:'100vh',
  width: "100%",
  paddingTop:'50px',
  [theme.breakpoints.up("sm")]: {
    width: "90%",
  },
  [theme.breakpoints.up("md")]: {
    padding: 0,
  },
  [theme.breakpoints.up("lg")]: {
    width: "100vw",
    maxWidht: "100vw",
    padding: 0,
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
