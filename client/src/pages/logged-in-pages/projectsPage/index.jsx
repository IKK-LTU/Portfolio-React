import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ProjectsSelector,
  fetchProjects,
  deleteProjectItem,
  updateProjectItem,
  createProjectItem,
} from "../../../store/projects";
import { Container, Button } from "@mui/material";
import NewProjectModal from "./new-project-modal";
import ProjectsList from "./projects-list";

const ProjectsPage = () => {
  const dispatch = useDispatch();
  const projects = useSelector(ProjectsSelector);

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  const handleDeleteItem = () => {
    const newInfo = {
      date: "1997-12-12",
      category: 1,
      title: "Figma design",
      description: "nananna",
      editor: "Markas Markovskis",
      technologies: ["React", "UX/UI", "Figma"],
      images: [
        "http://localhost:5000/images/BD.gif",
        "http://localhost:5000/images/BD.gif",
        "http://localhost:5000/images/BD.gif",
      ],
    };
    dispatch(createProjectItem({ newInfo }));
  };
  return (
    <Container sx={{ height: "100%", width: "100%" }}>
      <Button onClick={handleDeleteItem}>Delete item </Button>
      <NewProjectModal />
      <ProjectsList />
    </Container>
  );
};

export default ProjectsPage;
