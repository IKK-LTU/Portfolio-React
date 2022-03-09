import database from "../database/index.js";

export const getProjects = (req, res) => {
  const projects = database.data.projects;
  res.status(200).json(projects);
};
