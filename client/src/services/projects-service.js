import axios from "axios";
import store from "../store/index";

const requester = axios.create({
  baseURL: "http://localhost:5000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});
const fetchProjects = async () => {
    try {
        const { data } = await requester.get('/projects');
        return data
    }
    catch (error) {
        throw new Error(error.message);
  }
};
const fetchBlogs = async () => {
    try {
        const { data } = await requester.get('/blogs');
        return data
    }
    catch (error) {
        throw new Error(error.message);
  }
};

const ProjectsService = {
  fetchProjects,
  fetchBlogs,
};

export default ProjectsService;