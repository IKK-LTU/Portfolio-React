import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)(({ theme }) => ({
  background: "#79815E",
  borderRadius: "1px",
  width: "200px",
  height: "44px",
  color: "#F6F6F6",
  transition: "0.5s",
  ":hover": {
    background: "#8E8484",
    color: "black",
    width: "250px",
  }
}));

const contactMeButton = () => {
  return (
    <div>
      <StyledButton>Contact Me</StyledButton>
    </div>
  );
};

export default contactMeButton;
