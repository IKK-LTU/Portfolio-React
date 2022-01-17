import React from "react";
import { Container, Box } from "@mui/material";
import ProjectsPageImageButton from "./projects/projectsPageImageButton";

function projectsContainer() {
  return (
    <Container
      sx={{ textAlign: "center", fontSize: 30, width: "100%", height: "100%" }}>
      <h2>Projects</h2>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "70%",
          background: "white",
          margin: "auto",
          padding: "4rem 2rem",
          border: 1,
        }}>
        <Box sx={{ width: "40%" }}>
          <ProjectsPageImageButton />
        </Box>
        <div>
          <p>Labas</p>
        </div>
        <div>
          <p>Labas</p>
        </div>
      </Container>
    </Container>
  );
}

export default projectsContainer;
