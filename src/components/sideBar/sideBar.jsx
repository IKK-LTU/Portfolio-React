import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";

const pages = ["Home", "Projects", "Blog", "Contacts"];

const LinkButton = styled(Button)(({ theme }) => ({
  color: "black",
  background: "none",
  ":hover, :focus": {
    color: "#79815E",
    textDecoration: "line-through",
    transition: "0.5s",
    background: "none",
  },
}));
const SideBar = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const NavBarBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
    width: "100vh",
    height: "20vh",
  },
}));

const ResponsiveAppBar = () => {
  return (
    <>
      <SideBar
        color='inherit'
        sx={{
          left: "50px",
          width: "20%",
          boxShadow: "none",
          background: "none",
        }}>
        <Container maxWidth='xl'>
          <Toolbar sx={{ height: "100vh" }} disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                },
                flexDirection: "column",
                justifyContent: "space-between",
                height: "40%",
              }}>
              {pages.map((page) => (
                <LinkButton
                  disableRipple
                  key={page}
                  sx={{
                    display: "block",
                    textTransform: "none",
                    fontWeight: "bold",
                    fontSize: "1.3rem",
                    textAlign: "left",
                  }}>
                  {page}
                </LinkButton>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </SideBar>
      <NavBarBox>
        <AppBar color='inherit' position='fixed' sx={{ boxShadow: "none" }}>
          <Toolbar>
            {pages.map((page) => (
              <LinkButton
                disableRipple
                key={page}
                sx={{
                  display: "block",
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  textAlign: "center",
                  mx: "auto",
                  background: "white",
                }}>
                {page}
              </LinkButton>
            ))}
          </Toolbar>
        </AppBar>
      </NavBarBox>
    </>
  );
};
export default ResponsiveAppBar;
