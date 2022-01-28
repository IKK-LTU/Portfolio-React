import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess, logout, selectAuth } from "../../store/auth";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import { Container, Button } from "@mui/material";
import SideBarLink from "./sideBar-link";
import routes from "../../routing/routes";

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
  const { loggedIn } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout(loggedIn));
  const handleloginSuccess = () => dispatch(loginSuccess(loggedIn));

  return (
    <>
      {loggedIn ? (
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
            <Button onClick={handleLogout}>Click Logout</Button>

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
      ) : (
        <SideBar
          color='inherit'
          sx={{
            position: "sticky",
            left: "0",
            width: "100%",
            margin: "auto",
            height: "60px",
          }}>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}>
            <SideBarLink
              path={routes.LoginPage}
              key={routes.LoginPage}
              title={"Login"}
            />
            <Button onClick={handleloginSuccess}>Click Login</Button>
          </Container>
        </SideBar>
      )}
    </>
  );
};
export default ResponsiveAppBar;
