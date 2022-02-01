import React from "react";
import { Box, Typography} from "@mui/material";
import ImageBox from './ProjectImgSIde';
import { styled } from "@mui/material/styles";

import ProjectDescriptionBox from './ProjectDescriptionSide';


const StyledProjectBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "60%",
  padding: "0 20%",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
}));
const DateText = styled(Typography)(({ theme }) => ({
  textAlign: "right",
  color: "#9A9A9A",
  width: "100%",
}));

const projectContainer = (props) => {
  return (
    <StyledProjectBox sx={{ backgroundColor: `${props.color}`,color:'red' }}>
      {props.bgColor}
      <DateText varian='p'>2021-01-30</DateText>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "80%",
        }}>
        <ImageBox />
        <ProjectDescriptionBox />
      </Box>
    </StyledProjectBox>
  );
};

export default projectContainer;
