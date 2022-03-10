import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { styled } from "@mui/material/styles";
import { Box, TextField, Button, CircularProgress } from "@mui/material";
import { selectAuth } from "../../../store/auth";
import UserService from "../../../services/user-service";

const BoxStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "50%",
    margin: "auto",
    justifyContent: "center",
  },
  [theme.breakpoints.up("md")]: {},
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



const PageProfile = () => {
  const { user } = useSelector(selectAuth);
  // const [emailBeingChecked, setEmailBeingChecked] = useState(false);
  // const [emailAvailable, setEmailAvailable] = useState(true);
  // const [open, setOpen] = useState(false);

  const onSubmit = async () => {
    const response = await UserService.updateProfile(values);
    console.log(response);
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
      name:user.name,
      surname:user.surname,
      email:user.email,
    },
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  return (
    <BoxStyled>
      <Box
        sx={{
          padding: "1rem 2rem",
          borderRadius: "2px",
          boxShadow: 2,
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            pb: 3,
            marginTop: "-6rem",
          }}>
          <img
            alt='profilePicture'
            src='https://randomuser.me/api/portraits/men/23.jpg'
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              alignItems: "middle",
              border: "2px solid #d7ba9d",
            }}
          />
        </Box>
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
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
            disabled={isSubmitting}
            size='small'
            variant='standard'
            fullWidth
            sx={{ mb: 1 }}
          />
          <TextField
            id=''
            label='Role'
            value={user.role}
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
  );
};

export default PageProfile;
