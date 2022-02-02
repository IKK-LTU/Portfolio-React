import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";


const StyledImageBox = styled(Box)(({ theme }) => ({
  width: "45%",
  [theme.breakpoints.down("xl")]: {
  },
  [theme.breakpoints.down("lg")]: {
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    margin: "2rem auto",
  },
  [theme.breakpoints.down("sm")]: {
  },
}));
const ImageBox = (props) => {
  return (
    <StyledImageBox>
      <img
        style={{
          borderRadius: "1px",
          width: "100%",
          height: "100%",
          objectFit: "contain",
          // boxShadow: "2px 2px 2px 5px rgba(0, 0, 0, .1)",
        }}
        alt='project img'
        src={require("../../assets/projectsImages/darzelis/BD.gif")}
      />
    </StyledImageBox>
  );
};

export default ImageBox;
