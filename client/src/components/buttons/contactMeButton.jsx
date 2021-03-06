import React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  textTransform: "none",
  borderRadius: "1px",
  height: "44px",
  transition: "0.5s",
  alignItems: "center",
  width: "100%",
  ":hover": {
    background: theme.palette.secondary.main,
    color: theme.palette.text.primary,
  },
  [theme.breakpoints.up("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "30%",
    ":hover": {
      width: "35%",
    },
  },
  [theme.breakpoints.up("xl")]: {
    width: "20%",
    ":hover": {
      width: "25%",
    },
  },
}));
const ContactMeButton = (props) => {
  return (
      <StyledButton disableRipple component='button' variant='p'>
        {props.buttonText}
      </StyledButton>
  );
};
export default ContactMeButton;
