import database from "../database/index.js";

export const getTechnologies = (req, res) => {
  const technologies = database.data.technologies;
  res.status(200).json(technologies);
};
