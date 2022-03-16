/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProjectsService from "../services/projects-service";

const initialState = {
  isFetched: false,
  projects: [],
};

export const fetchProjects = createAsyncThunk(
  "Projects/fetchProjects",
  async (_, { getState }) => {
    const {
      projects: { isFetched, projects },
    } = getState();
    if (!isFetched) {
      const fetchedProjects = await ProjectsService.fetchProjects();
      return { projects: fetchedProjects };
    }
    return { projects };
  }
);
export const fetchProject = createAsyncThunk(
  "Projects/fetchProject",
  async ({ itemId}, { getState }) => {
    const { projects: { projects } } = getState();
    const existingProject = projects.find((x) => x.id === itemId);
    if (existingProject) throw new Error('project already exist');
    const fetchedProject = await ProjectsService.fetchProject({itemId});
    return { projects:fetchedProject };
  }
);

export const createProjectItem = createAsyncThunk(
  "Projects/createProject",
  async ({ projectInfo }) => {
    const createdItem = await ProjectsService.createProject({ projectInfo });
    return { createdItem };
  }
);

export const updateProjectItem = createAsyncThunk(
  "Projects/updateeProject",
  async ({ itemId, projectInfo }) => {
    const updatedItem = await ProjectsService.updateProject({
      itemId,
      projectInfo,
    });
    return {updatedItem} ;
  }
);
export const deleteProjectItem = createAsyncThunk(
  "Projects/deleteProject",
  async ({ itemId }) => {
     await ProjectsService.deleteProject({ itemId });
    return { itemId };
  }
);

const ProjectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    deleteError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: {
    [fetchProjects.fulfilled]: (state, { payload }) => {
      state.projects = payload.projects;
      state.isFetched = true;
    },
    [fetchProject.fulfilled]: (state, { payload }) => {
      state.projects.push(payload.projects);
    },
    [createProjectItem.fulfilled]: (state, { payload }) => {
      const { createdItem } = payload;
      state.projects.push({ ...createdItem });
    },
    [createProjectItem.rejected]: (state, { error }) => {
      state.error = error.message;
    },
    [updateProjectItem.fulfilled]: (state, { payload }) => {
      const { updatedItem } = payload;
      state.projects.find((x) => x.id === updatedItem.id);
      state.projects=state.projects.map((x) =>
        x.id === updatedItem.id ? updatedItem : x
      );
    },
    [updateProjectItem.rejected]: (state, { error }) => {
      state.error = error.message;
    },
    [deleteProjectItem.fulfilled]: (state, { payload }) => {
      const { itemId } = payload;
      state.projects = state.projects.filter((x) => x.id !== itemId);
    },
    [deleteProjectItem.rejected]: (state, { error }) => {
      state.error = error.message;
    },
  },
});

export const { deleteError,projects } = ProjectsSlice.actions;

export const ProjectsSelector = (state) => state.projects.projects;
export const FetchSelector = (state) => state.projects.isFetched;
export const ProjectItemSelector = (id) => (state) => state.projects.projects.find((x) => x.id === id);

export default ProjectsSlice.reducer;
