import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Button } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  textTransform: "none",
  borderRadius: "1px",
  width: "200px",
  height: "44px",
  transition: "0.5s",
  ":hover": {
    background: theme.palette.secondary.main,
    width: "250px",
    color: theme.palette.text.primary,
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "5%",
    width: "95%",
    ":hover": {
      width: "100%",
    },
  },
}));
const contactMeButton = () => {
  return (
    <div>
      <StyledButton>
        <Typography variant='p'>Contact Me</Typography>
      </StyledButton>
    </div>
  );
};
export default contactMeButton;
