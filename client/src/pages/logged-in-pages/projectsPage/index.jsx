import React, { useContext } from "react";
import { Container } from "@mui/material";
import NewProjectModal from './new-project-modal';
import ProjectsList from './projects-list';

const ProjectsPage = () => {


  return (
    <Container sx={{ height: "100%", width: "100%"}}>
          <NewProjectModal />
          <ProjectsList/>
    </Container>
  );
};

export default ProjectsPage;
