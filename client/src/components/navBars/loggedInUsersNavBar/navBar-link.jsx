import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  display: "flex",
  color: "#fff",
  textDecoration: "none",
  height: "100%",
  alignItems: "center",
  textTransform: "none",
  fontWeight: "bold",
  fontSize: "1rem",
  textAlign: "left",
  ":hover, :focus": {
    borderBottom: "1px solid black",
    color: "#000",
    textDecoration: "line-through",
    background: "none",
  },
  [theme.breakpoints.down("md")]: {
    padding: 0,
    fontSize: ".9rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: ".9rem",
  },
}));
const NavBarLink = (props) => {
  return (
    <StyledNavLink to={props.path}>
      {props.title}
    </StyledNavLink>
  );
};
export default NavBarLink;