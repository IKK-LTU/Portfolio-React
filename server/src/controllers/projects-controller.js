import database from "../database/index.js";
import { v4 as createId } from "uuid";

export const getProjects = (req, res) => {
  const projects = database.data.projects;
  res.status(200).json(projects);
};

export const getProjectsItem = (req, res) => {
  const DB = JSON.parse(JSON.stringify(database.data));
  const { projectId } = req.params;
  const project = DB.projects.find((x) => x.id === projectId);

  res.status(200).json(project);
};

export const createProjectsItem = (req, res) => {
  const newProject = req.body.newInfo;
  const projects = database.data.projects;
  const newItem = {
    id: createId(),
    ...newProject,
  };
  projects.push(newItem);
  database.write();
  res.status(200).json(newItem);
  
};

export const deleteProjectsItem = (req, res) => {
  const { projectId } = req.params;
  const { title } = req.body;
  const projects = database.data.projects;
  const projectRef = database.data.projects.find((x) => x.id === projectId);

  database.data.projects = projects.filter((x) => x.id !== projectId);
  database.write();
  res.status(200).send();
};

export const updateProjectsItem = (req, res) => {
  const { projectId } = req.params;
  const { date, category, title, description, editor, technologies, images } =
    req.body.newInfo;
  console.log(req.body);
  const projectRef = database.data.projects.find((x) => x.id === projectId);
  const project = database.data.projects;

  const itemToUpdate = project.find((x) => x.id === projectId);

  itemToUpdate.date = date ? date : itemToUpdate.date;
  itemToUpdate.category = category ? category : itemToUpdate.category;
  itemToUpdate.title = title ? title : itemToUpdate.title;
  itemToUpdate.description = description
    ? description
    : itemToUpdate.description;
  itemToUpdate.editor = editor ? editor : itemToUpdate.editor;
  itemToUpdate.technologies = technologies
    ? technologies
    : itemToUpdate.technologies;
  itemToUpdate.images = images ? images : itemToUpdate.images;
  database.write();
  res.status(200).json(itemToUpdate);
};
