import React from "react";
import { Box } from "@mui/material";
import ProjectContainer from "./project-container";

const ProjectsPage = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        boxSizing: "content-box",
        height: "50vh",
        left: "0",
        right: "0",
      }}>
      <ProjectContainer color='#343434' />
      <ProjectContainer color='white' />
    </Box>
  );
}

export default ProjectsPage;
