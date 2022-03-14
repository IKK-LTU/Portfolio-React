import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import AuthService from "../../services/auth-service";

import {
  TextField,
  Typography,
  IconButton,
  Box,
  Grid,
  Alert,
} from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import FormSendButton from "../../components/buttons/formSendButton";
import CloseIcon from "@mui/icons-material/Close";

const validationSchema = yup.object({
  email: yup.string().email("Is not valid email").required("Is required"),
  password: yup.string().required("Is required"),
});
const initialValues = {
  email: "",
  password: "",
};
const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const [errorMsg, setErrorMsg] = useState(null);

  const handleLogin = async ({ email, password }) => {
    console.log("veikia");
    try {
      const redirectTo = searchParams.get("redirectTo");
      console.log(redirectTo);
      await AuthService.login({ email, password }, redirectTo);
    } catch (error) {
      console.log("neveikia");
      setErrorMsg(error.message);
    }
  };
  const {
    values,
    errors,
    touched,
    // isValid,
    // dirty,
    // isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleLogin,
  });
  return (
    <form
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
      onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "5px",
          width: "40%",
          py: 4,
          px: 5,
          mx: 4,
          background: "#fff1f1",
        }}>
        <Typography
          variant='h3'
          component='h2'
          sx={{ mb: 4, textAlign: "center" }}>
          LOGIN
        </Typography>
        {errorMsg ? (
          <Grid item xs={12}>
            <Alert
              severity='error'
              action={
                <IconButton
                  aria-label='close'
                  color='inherit'
                  size='small'
                  onClick={() => setErrorMsg(null)}>
                  <CloseIcon fontSize='inherit' />
                </IconButton>
              }>
              {errorMsg}
            </Alert>
          </Grid>
        ) : null}
        <TextField
          id='email'
          label='Email'
          variant='outlined'
          autoFocus
          sx={{ mb: 2 }}
          name='email'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <TextField
          type='password'
          id='password'
          label='Password'
          variant='outlined'
          sx={{ mb: 2 }}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
        <FormSendButton buttonText='Login' variant='text' />
      </Box>
    </form>
  );
};

export default LoginPage;
