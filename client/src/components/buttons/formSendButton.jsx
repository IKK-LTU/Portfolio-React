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
  alignItems:'center',
  ":hover": {
    background: theme.palette.secondary.main,
    color: theme.palette.text.primary,
  },
}));
const FormSendButton = (props) => {
  return (
    <StyledButton type='submit' disableRipple component='button' variant='p'>
      {props.buttonText}
    </StyledButton>
  );
}

export default FormSendButton;