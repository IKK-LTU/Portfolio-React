import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ProjectsSelector,
  FetchSelector,
  fetchProjects,
} from "../../../store/projects";
import { Container } from "@mui/material";
import NewProjectModal from "./new-project-modal";
import ProjectsList from "./projects-list";

const ProjectsPage = () => {
  const dispatch = useDispatch();
  // const {state: { id }, } = useLocation();
  const projects = useSelector(ProjectsSelector);
  const isFetched = useSelector(FetchSelector);
  useEffect(() => {
      dispatch(fetchProjects());
  },[]);
  return (
    <Container sx={{ height: "100%", width: "100%" }}>
      
      <NewProjectModal />
      {isFetched ?
      <ProjectsList projects={projects} />
      :<h1> waiting</h1>
      }
    </Container>
  );
};

export default ProjectsPage;
