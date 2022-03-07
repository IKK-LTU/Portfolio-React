import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import { Container } from "@mui/material";
import SideBarLink from "./sideBar-link";
import routes from "../../../routing/routes";

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
            <SideBarLink
              path={routes.HomePage}
              key={routes.HomePage}
              title={"Home"}
            />

            <SideBarLink
              path={routes.ProjectsPage}
              key={routes.ProjectsPage}
              title={"Projects"}
            />
            <SideBarLink
              path={routes.BlogPage}
              key={routes.BlogPage}
              title={"Blog"}
            />
            <SideBarLink
              path={routes.ContactsPage}
              key={routes.ContactsPage}
              title={"Contacts"}
            />
          </Container>
        </SideBar>
    </>
  );
};
export default ResponsiveAppBar;
