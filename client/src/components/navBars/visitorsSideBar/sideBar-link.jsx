import React from "react";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const SideBarLink = (props) => {

  const StyledNavLink = styled(NavLink)(({ theme }) => ({
    color: "#4e4e4d",
    textDecoration: "none",
    ":hover, :focus": {
      color: "#79815E",
      textDecoration: "line-through",
      transition: "0.5s",
      background: "none",
    },
    [theme.breakpoints.down("md")]: {
      padding: 0,
      fontSize: "1.1rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".9rem",
    },
  }));
  return (
    <StyledNavLink
      to={props.path}
      sx={{
        textTransform: "none",
        fontWeight: "bold",
        fontSize: "1.3rem",
        textAlign: "left",
      }}>
      {props.title}
    </StyledNavLink>
  );
};

export default SideBarLink;
