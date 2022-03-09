import React from "react";
import { Box, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";


const StyledProjectContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "60%",
  padding: "0 20%",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  [theme.breakpoints.down("xl")]: {
    width: "80%",
    padding: "1.5rem 10%",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    padding: "1rem 5%",
  },
}));



const projectContainer = ({children}) => {
  return (
    <StyledProjectContainer
      sx={{
        background: `#000 linear-gradient(315deg, #2d3436 0%, #000000 74%)`,
        color: "red",
      }}>
      {children}
    </StyledProjectContainer>
  );
};

export default projectContainer;
