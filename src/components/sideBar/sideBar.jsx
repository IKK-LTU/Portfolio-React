import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import { Container } from "@mui/material";
import SideBarLink from "./sideBar-link";

const pages = [
  { title: "Home", path: "/" },
  { title: "Projects", path: "/projects-page" },
  { title: "Blog", path: "/blog-page" },
  { title: "Contacts", path: "/contacts-page" },
];

const SideBar = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    position: "sticky",
    left: "0",
    width: "70%",
    margin: "auto",
    height: "60px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "95%",
  },
}));

const ResponsiveAppBar = () => {
  return (
    <>
      <SideBar
        color='inherit'
        sx={{
          display: "flex",
          justifyContent: "space-around",
          height: "100%",
          left: "50px",
          width: "10%",
          boxShadow: "none",
          background: "none",
        }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: {
              sm: "0",
            },
            flexDirection: {
              lg: "column",
            },
            height: "40%",
          }}>
          {pages.map((page) => (
            <SideBarLink path={page.path} key={page.title} title={page.title} />
          ))}
        </Container>
      </SideBar>
    </>
  );
};
export default ResponsiveAppBar;
