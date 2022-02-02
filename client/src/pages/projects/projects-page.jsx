import React from "react";
import { Box } from "@mui/material";
import ProjectContainer from "./project-container";
import { styled } from "@mui/material/styles";

const StyledProjectPageContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  boxSizing: "content-box",
  height: "50vh",
  left: "0",
  right: "0",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
  },
  [theme.breakpoints.down("md")]: {
    height: "auto",
  },
  [theme.breakpoints.down("sm")]: {
  },
}));
const ProjectsPage = () => {
  return (
    <StyledProjectPageContainer
      sx={{
        
      }}>
      <ProjectContainer
        color='#343434'
        projectDate='2021-01-30'
      />
      <ProjectContainer
        color='#000'
        projectDate='2021-01-30'
      />
      <ProjectContainer
        color='#343434'
        projectDate='2021-01-30'
      />
    </StyledProjectPageContainer>
  );
}

export default ProjectsPage;
