import React from "react";
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import ContactMeButton from "../../components/buttons/contactMeButton";

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "auto",
  height: "100vh",
  width: "70%",
  padding: 0,

  [theme.breakpoints.down("xl")]: {
    padding: 0,
  },
  [theme.breakpoints.down("lg")]: {
    width: "90%",
    span: { fontSize: "1rem" },
  },
  [theme.breakpoints.down("sm")]: {
    h1: { fontSize: "1.4rem" },
    span: { fontSize: ".8rem" },
  },
}));

const HomePage = () => {
  return (
    <StyledContainer>
      <Typography variant='h1' sx={{ fontSize: 42 }}>
        Hi,
        <br /> I'm Ignas
      </Typography>
      <Typography
        variant='p'
        sx={{ fontSize: 18, fontFamily: "ChivoRegular", py: 8 }}>
        I’m WEB developer who are always searching for the new opportunities to
        grow. I think it’s must to seek perfection and then you will even
        surprise yourself.
      </Typography>
      <ContactMeButton buttonText="Contact me" />
    </StyledContainer>
  );
};

export default HomePage;
