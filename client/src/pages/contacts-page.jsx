import React from "react";
import { Container, Box, Typography, TextField } from "@mui/material";
import ContactMeButton from "../components/buttons/contactMeButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const ContactsPage = () => {
  return (
    <Container sx={{ widht: "100%", height: "100%", color: "#494444", p: 0 }}>
      <Box
        component='form'
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          background: "white",
          padding: "2rem 2rem",
          height: "100%",
          width: "100%",
          "& .MuiTextField-root": { margin: "auto", width: "100%" },
        }}
        noValidate
        autoComplete='off'>
        <Typography sx={{ textAlign: "center",pb:3 }} component='h2' variant='h5'>
          Feel free to contact me
        </Typography>
        <TextField label='Name' />
        <TextField label='Email' />
        <TextField
          label='Message'
          multiline
          rows={6}
          sx={{ pb:2 }}
        />
        <ContactMeButton buttonText='Send' style={{width:'100%'}} />
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
      </Box>
    </Container>
  );
};

export default ContactsPage;
