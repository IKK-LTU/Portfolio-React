import React, { useState } from "react";
import { Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const StyledLinkToProject = styled(Link)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  margin:'1rem 0'
}));

const LinkToProject = (props) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <StyledLinkToProject
      href={props.linkTo}
      underline='hover'
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      sx={{ transition: "0.5s hover" }}>
      <ArrowForwardIcon
        sx={{
          borderRadius: "3px",
          mr: 2,
          border: "1px solid #79815E",
          transition: "0.5s",
          ...(isShown
            ? { backgroundColor: "#79815E", color: "white" }
            : { backgroundColor: "white" }),
        }}
      />
      <Typography varian='p'>Project Link</Typography>
    </StyledLinkToProject>
  );
};

export default LinkToProject;
