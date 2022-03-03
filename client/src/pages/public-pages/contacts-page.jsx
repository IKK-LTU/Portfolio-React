import React from "react";
import { Container, Box, Typography, TextField } from "@mui/material";
import FormSendButton from "../../components/buttons/formSendButton";
import ContactIcons from "../../components/contactsIcons/contactIcons";
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
    padding: "3rem 2rem",
    margin: "10% auto",
  },
  [theme.breakpoints.up("md")]: {
    width: "50%",
    height: "70%",
    margin: "15% auto",
    padding: "3rem 3rem",
  },
  [theme.breakpoints.up("lg")]: {
    width: "50%",
    height: "70%",
    margin: "15% auto",
    padding: "4rem",
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
        <ContactIcons/>
        </Box>
      </StyledFormBox>
    </Container>
  );
};

export default ContactsPage;
