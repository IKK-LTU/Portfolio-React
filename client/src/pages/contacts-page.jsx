import React from "react";
import { Container, Box, Typography, TextField } from "@mui/material";
import FormSendButton from "../components/buttons/formSendButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import { styled } from "@mui/material/styles";

const StyledFormBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  background: "white",
  padding: "20% 1rem",
  width: "100%",
  height: "100%",
  "& .MuiTextField-root": { margin: "auto", width: "100%" },
  [theme.breakpoints.up("sm")]: {
    width: "90%",
    height: "80%",
    padding: "3rem 1rem",
    margin: "10% auto",
  },
  [theme.breakpoints.up("md")]: {
    width: "50%",
    height: "70%",
    margin: "15% auto",
  },
  [theme.breakpoints.up("lg")]: {
    width: "50%",
    height: "65%",
    margin: "20% auto",
  },
}));
const ContactsPage = () => {
  return (
    <Container
      sx={{
        height: "100%",
        color: "#494444",
        p: 0,
      }}>
      <StyledFormBox component='form' noValidate autoComplete='off'>
        <Typography
          sx={{ textAlign: "center", pb: 3 }}
          component='h2'
          variant='h5'>
          Feel free to contact me
        </Typography>
        <TextField label='Name' />
        <TextField label='Email' />
        <TextField label='Message' multiline rows={6} />
        <FormSendButton buttonText='Send' />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            fontSize: "3rem",
            pt: 3,
          }}>
          <GitHubIcon sx={{ fontSize: "2.5rem", color: "black" }} />
          <LinkedInIcon sx={{ fontSize: "2.5rem", color: "#0e76a8" }} />
          <EmailIcon sx={{ fontSize: "2.5rem", color: "red" }} />
          <CallIcon sx={{ fontSize: "2.5rem", color: "#529552" }} />
        </Box>
      </StyledFormBox>
    </Container>
  );
};

export default ContactsPage;
