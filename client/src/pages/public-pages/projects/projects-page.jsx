import React, { useState, useEffect, useContext } from "react";
import { Box, Typography } from "@mui/material";
import ProjectContainer from "./project-container";
import { styled } from "@mui/material/styles";
import { DataContext } from "../context/data-context";
import ImageBox from "./ProjectImgSIde";
import ProjectDescriptionBox from "./ProjectDescriptionSide";
import ReadMore from "../../../components/readMore/readMore";
import LinkToProject from "./LinkToProject";

// import ProjectsService from "../../../services/projects-service";

const StyledProjectPageContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  boxSizing: "content-box",
  height: "50vh",
  left: "0",
  right: "0",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    height: "auto",
  },
  [theme.breakpoints.down("sm")]: {},
}));
const DateText = styled(Typography)(({ theme }) => ({
  textAlign: "right",
  color: "#9A9A9A",
  width: "100%",
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
const ProjectsPage = () => {
  const { projects, loading } = useContext(DataContext);

  return (
    <StyledProjectPageContainer sx={{}}>
      {loading === false ? (
        projects.map((project) => {
          return (
            <ProjectContainer key={project.id} projectDate={project.date}>
              <DateText varian='p' />
              <StyledProjectBox>
                <ImageBox src={project.images[0]} />
                <ProjectDescriptionBox>
                  <Typography
                    varian='h2'
                    component='h2'
                    sx={{
                      color: "#FF7D7D",
                      fontSize: "1.2rem",
                      textAlign: "center",
                      py: 2,
                    }}>
                    {project.title}
                  </Typography>
                  <ReadMore
                    text={project.description}
                  />
                  <LinkToProject linkTo='./' />
                </ProjectDescriptionBox>
              </StyledProjectBox>
            </ProjectContainer>
          );
        })
      ) : (
        <h1>Krauna</h1>
      )}
    </StyledProjectPageContainer>
  );
};

export default ProjectsPage;
