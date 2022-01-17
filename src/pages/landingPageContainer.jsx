import React from "react";
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import ContactMeButton from "../components/buttons/contactMeButton";

const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
    margin: "auto",
    h1: { fontSize: "2rem" },
    p: { fontSize: "2rem" },
  },
  [theme.breakpoints.down("xl")]: {
    margin: "auto",
    h1: { fontSize: "2rem" },
    p: { fontSize: "2rem" },
  },
}));

const LandingpageContainer = () => {
  return (
    <StyledContainer
      sx={{ display: "flex", flexDirection: "column",justifyContent:'space-between', margin: "auto",width:'50%',height:'40%' }}>
      <Typography variant='h1' sx={{ fontSize: 42 }}>
        Hi,
        <br /> I'm Ignas
      </Typography>
      <Typography  variant='p' sx={{ fontSize: 18 }}>
        I’m WEB developer who are always searching for the new opportunities to
        grow. I think it’s must to seek perfection and then you will even
        surprise yourself.
      </Typography>
      <ContactMeButton />
    </StyledContainer>
  );
};

export default LandingpageContainer;
