import React from "react";
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import ContactMeButton from "../components/buttons/contactMeButton";

const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
    margin: "auto",
    h1: { fontSize: "2rem" },
    p: { fontSize: "2rem" },
  },
  [theme.breakpoints.up("md")]: {
    width: "60%",
    margin: "auto",
    h1: { fontSize: "2rem" },
    p: { fontSize: "2rem" },
  },
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "20%",
    width: "80%",
  },
  [theme.breakpoints.down("md")]: {
    paddingLeft: "5%",
    width: "90%",
    h1: { fontSize: "1.5rem" },
    p: { fontSize: "1.5rem" },
  },
}));

const LandingpageContainer = () => {
  return (
    <StyledContainer
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "auto",
        height: "40%",
      }}>
      <Typography variant='h1' sx={{ fontSize: 42 }}>
        Hi,
        <br /> I'm Ignas
      </Typography>
      <Typography variant='p' sx={{ fontSize: 18, fontFamily: "ChivoRegular" }}>
        I’m WEB developer who are always searching for the new opportunities to
        grow. I think it’s must to seek perfection and then you will even
        surprise yourself.
      </Typography>
      <ContactMeButton />
    </StyledContainer>
  );
};

export default LandingpageContainer;
