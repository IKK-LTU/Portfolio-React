import React from "react";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideBar from "../sideBar/sideBar";

const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    width: "100vw",
    maxWidht:'100vw',
    padding: 0,
  },
  [theme.breakpoints.down("md")]: {
    padding: 0,
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

const PageLayout = () =>  (
  <>
    <SideBar
      sx={{ position: "sticky", backgroundColor: "#000" }}
    />
    <StyledContainer
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        width: "100vw",
      }}>
      <Outlet />
    </StyledContainer>
  </>
)

export default PageLayout;
