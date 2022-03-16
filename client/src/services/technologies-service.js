import axios from "axios";

const requester = axios.create({
  baseURL: "http://localhost:5000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});
const fetchTechnologies = async () => {
  try {
    const { data } = await requester.get("/technologies");
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const ProjectsService = {
  fetchTechnologies,
};

export default ProjectsService;
