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
    const { data } = await requester.get("/projects");
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
const fetchProject = async () => {
  try {
    const { data } = await requester.get("/projects");
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};


const createProject = async ({ projectInfo }) => {
  const { token } = store.getState().auth;
  try {
    const { data } = await requester.post(
      `/projects`, // url
      { projectInfo },
      {
        // headeriai - užklausos nustatymai
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const deleteProject = async ({ itemId }) => {
  const { token } = store.getState().auth;
  try {
    await requester.delete(
      `/projects/${itemId}`, // url
      {
        // headeriai - užklausos nustatymai
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return true;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
const updateProject = async ({ itemId, projectInfo }) => {
  const { token } = store.getState().auth;
  try {
    const { data } = await requester.patch(
      `/projects/${itemId}`, // url
      { projectInfo },
      {
        // headeriai - užklausos nustatymai
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
const ProjectsService = {
  fetchProjects,
  deleteProject,
  updateProject,
  createProject,
  fetchProject,
};
export default ProjectsService;
