import React from "react";
import { Box, Typography} from "@mui/material";
import ImageBox from './ProjectImgSIde';
import { styled } from "@mui/material/styles";

import ProjectDescriptionBox from './ProjectDescriptionSide';


const StyledProjectContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "60%",
  padding: "0 20%",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  [theme.breakpoints.down("xl")]: {
    width: "80%",
    padding: "1.5rem 10%",
  },
  [theme.breakpoints.down("lg")]: {
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    padding: "1rem 5%",
  },
}));
const StyledProjectBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  height: "80%",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.down("sm")]: {
    widht: "100%",
  },
}));
const DateText = styled(Typography)(({ theme }) => ({
  textAlign: "right",
  color: "#9A9A9A",
  width: "100%",
}));

const projectContainer = (props) => {
  return (
    <StyledProjectContainer sx={{ background: `${props.color}`,color:'red' }}>
      {props.bgColor}
      <DateText varian='p'>{props.projectDate }</DateText>
      <StyledProjectBox>
        <ImageBox />
        <ProjectDescriptionBox />
      </StyledProjectBox>
    </StyledProjectContainer>
  );
};

export default projectContainer;
