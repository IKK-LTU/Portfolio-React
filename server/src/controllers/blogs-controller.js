import database from "../database/index.js";

export const getBlogs = (req, res) => {
  const blogs = database.data.blogs;
  res.status(200).json(blogs);
};
