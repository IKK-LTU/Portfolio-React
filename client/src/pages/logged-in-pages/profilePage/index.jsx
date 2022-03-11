import React from "react";
import { useSelector } from "react-redux";
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { selectAuth } from "../../../store/auth";
import Profile from "./profile-form";

const ContainerStyled = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  height: "100%",
  width: "100%",
  padding: "10px 0",
  [theme.breakpoints.up("sm")]: {
    padding: "50px 0",
    margin: "auto",
  },
  [theme.breakpoints.up("md")]: {
    padding: "100px 0",
  },
  [theme.breakpoints.up("lg")]: {
    margin: "auto",
  },
}));

const ProfilePage = () => {
  const {user 
  }= useSelector(selectAuth);
  return (
    <ContainerStyled>
      <Typography variant='h4' component='h2' textAlign='center'>
        Profile Information
      </Typography>
      <Profile {...user} />
    </ContainerStyled>
  );
};

export default ProfilePage;
