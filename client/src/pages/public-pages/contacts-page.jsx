import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
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
const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, "At least 2 symbols")
    .max(32, "Maximum 32 symbols")
    .required("Is required"),
  message: yup.string().min(20, "At least 20 symbols").required("Is required"),
  email: yup.string().email("Is not valid email").required("Is required"),
});

const ContactsPage = () => {
  const onSubmit = () => {
    console.log("submited");
  };
  const {
    values,
    errors,
    dirty,
    isValid,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  return (
    <Container
      sx={{
        height: "100%",
        color: "#494444",
        p: 0,
      }}>
      <StyledFormBox
        onSubmit={handleSubmit}
        component='form'
        noValidate
        autoComplete='off'>
        <Typography
          sx={{ textAlign: "center", pb: 3 }}
          component='h2'
          variant='h5'>
          Feel free to contact me
        </Typography>
        <TextField
          label='Name'
          size='small'
          name='name'
          value={values.name}
          onChange={handleChange}
          error={Boolean(errors.name)}
          helperText={errors.name}
          disabled={isSubmitting}
        />
        <TextField
          label='Email'
          size='small'
          name='email'
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
          value={values.email}
          disabled={isSubmitting}
        />
        <TextField
          size='small'
          name='message'
          onChange={handleChange}
          value={values.message}
          error={Boolean(errors.message)}
          helperText={errors.message}
          disabled={isSubmitting}
          label='Message'
          multiline
          rows={6}
        />
        <FormSendButton
          variant='contained'
          color='primary'
          type='submit'
          disabled={!dirty || !isValid}
          buttonText='Send'
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            fontSize: "3rem",
            pt: 3,
          }}>
          <ContactIcons />
        </Box>
      </StyledFormBox>
    </Container>
  );
};

export default ContactsPage;
