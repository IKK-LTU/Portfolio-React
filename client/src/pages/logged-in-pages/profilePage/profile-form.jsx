import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { styled } from "@mui/material/styles";
import {
  Box,
  TextField,
  Button,
  CircularProgress,
  InputAdornment,
} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AuthService from "../../../services/auth-service";
import ConfirmationModal from "./profile-page-changes-confirmation-modal";
import ProfileImage from './profile-page-image';

const BoxStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "90%",
    margin: "auto",
    justifyContent: "center",
  },
  [theme.breakpoints.up("md")]: {
    width: "50%",
  },
  [theme.breakpoints.up("lg")]: {
    margin: "auto",
  },
}));

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, "At least 2 symbols")
    .max(32, "Maximum 32 symbols")
    .required("Is required"),
  surname: yup
    .string()
    .min(2, "At least 2 symbols")
    .max(32, "Maximum 32 symbols")
    .required("Is required"),
  email: yup.string().email("Is not valid email").required("Is required"),
});

const PageProfile = ({ name, surname, email, imgSrc }) => {
  const [emailBeingChecked, setEmailBeingChecked] = useState(false);
  const [emailAvailable, setEmailAvailable] = useState(true);
  const [open, setOpen] = useState(false);

  const onSubmit = async () => {
    setOpen(true);
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
      name,
      surname,
      email,
      imgSrc
    },
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });
  const emailIsInitial = values.email === email;

  const handleEmailChange = (event) => {
    handleChange(event);
    if (event.target.value !== email && !errors.email) {
      (async () => {
        setEmailBeingChecked(true);
        const fetchedEmailAvailable = await AuthService.checkEmail(
          event.target.value
        );
        setEmailBeingChecked(false);
        setEmailAvailable(fetchedEmailAvailable);
      })();
    }
  };

  let emailAdornment;
  if (!emailIsInitial && !errors.email) {
    if (emailBeingChecked) {
      emailAdornment = (
        <InputAdornment position='end'>
          <CircularProgress size={24} />
        </InputAdornment>
      );
    } else {
      emailAdornment = emailAvailable ? (
        <InputAdornment position='end'>
          <CheckCircleIcon color='success' />
        </InputAdornment>
      ) : (
        <InputAdornment position='end'>
          <ErrorIcon color='error' />
        </InputAdornment>
      );
    }
  }
  return (
    <>
      <ConfirmationModal
        handleClose={() => setOpen(false)}
        open={open}
        formData={values}
      />
      <BoxStyled>
        <Box
          sx={{
            padding: "1rem 2rem",
            borderRadius: "2px",
            boxShadow: 2,
          }}>
          <ProfileImage imgSrc={imgSrc}/>
          <form
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              width: "100%",
            }}>
            <TextField
              id='name'
              label='Name'
              value={values.name}
              onChange={handleChange}
              error={Boolean(errors.name)}
              helperText={errors.name}
              disabled={isSubmitting}
              size='small'
              variant='standard'
              sx={{ mb: 1, width: "100%" }}
            />
            <TextField
              id='surname'
              label='Surname'
              value={values.surname}
              onChange={handleChange}
              error={Boolean(errors.surname)}
              helperText={errors.surname}
              disabled={isSubmitting}
              size='small'
              variant='standard'
              fullWidth
              sx={{ mb: 1 }}
            />
            <TextField
              id='email'
              label='Email'
              value={values.email}
              onChange={handleEmailChange}
              error={Boolean(errors.email) || !emailAvailable}
              helperText={
                errors.email ??
                (emailAvailable ? undefined : "paštas jau užimtas")
              }
              InputProps={{ endAdornment: emailAdornment }}
              disabled={isSubmitting}
              size='small'
              variant='standard'
              fullWidth
              sx={{ mb: 1 }}
            />
            <TextField
              id=''
              label='Role'
              value='rol'
              size='small'
              variant='standard'
              fullWidth
              disabled
              sx={{ mb: 1 }}
            />
            <Button
              fullWidth
              disabled={!isValid || !dirty}
              type='submit'
              sx={{
                color: "#2d321d",
                my: 2,
                background: "#7aff00",
                "&:hover": {
                  background: "#d7ba9d",
                },
              }}>
              {isSubmitting ? (
                <CircularProgress color='inherit' size={24} />
              ) : (
                "update profile"
              )}
            </Button>
          </form>
        </Box>
      </BoxStyled>
    </>
  );
};

export default PageProfile;
