import React from "react";
import { styled } from "@mui/material/styles";
import { Box, TextField, Button } from "@mui/material";

const BoxStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height:'100%',
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

const PageProfile = () => {
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
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            width: "100%",
          }}>
          <TextField
            id='name'
            label='Name'
            value='Adminas'
            size='small'
            variant='standard'
            disabled
            sx={{ mb: 1, width: "100%" }}
          />
          <TextField
            id='surname'
            label='Surname'
            value='Gediminas'
            size='small'
            variant='standard'
            fullWidth
            disabled
            sx={{ mb: 1 }}
          />
          <TextField
            id='email'
            label='Email'
            value='adminas@gmail.com'
            size='small'
            variant='standard'
            fullWidth
            disabled
            sx={{ mb: 1 }}
          />
          <TextField
            id='password'
            label='Password'
            value='Vilnius123'
            type='password'
            size='small'
            variant='standard'
            fullWidth
            disabled
            sx={{ mb: 1 }}
          />
          <TextField
            id=''
            label='Role'
            value='Admin'
            size='small'
            variant='standard'
            fullWidth
            disabled
            sx={{ mb: 1 }}
          />
          <Button
            color='primary'
            fullWidth
            sx={{
              my: 2,
              background: "#e7b37e",
              "&:hover": {
                background: "#d7ba9d",
              },
            }}>
            Submit
          </Button>
        </form>
      </Box>
    </BoxStyled>
  );
};

export default PageProfile;
