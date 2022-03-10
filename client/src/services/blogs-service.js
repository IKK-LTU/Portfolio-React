import axios from "axios";

const requester = axios.create({
  baseURL: "http://localhost:5000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});
const fetchBlogs = async () => {
  try {
    const { data } = await requester.get("/blogs");
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const ProjectsService = {
  fetchBlogs,
};

export default ProjectsService;
