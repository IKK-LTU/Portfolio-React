import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const pages = ["Home", "Projects", "Blog", "Contacts"];

const LinkButton = styled(Button)({
  color: "black",
  background:'none',
  ':hover, :focus': {
    color: "#79815E",
    textDecoration: 'line-through',
    transition: '0.5s',
    background:'none'
  },
});

const ResponsiveAppBar = () => {
  return (
    <AppBar
      position='absolute'
      color='inherit'
      sx={{ width: "20%", left: "0", boxShadow: "none" }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
              },
              flexDirection: "column",
              justifyContent: "center",
              height: "100vh",
            }}>
            {pages.map((page) => (
              <LinkButton
                disableRipple
                key={page}
                sx={{
                  my: 2,
                  display: "block",
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}>
                {page}
              </LinkButton>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
