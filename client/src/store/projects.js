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
      // console.log(fetchedProjects);
      return { projects: fetchedProjects };
    }
    return { projects };
  }
);

export const createProjectItem = createAsyncThunk(
  "Projects/createProject",
  async ({ newInfo }) => {
    const createdItem = await ProjectsService.createProject({ newInfo });
    return { createdItem };
  }
);

export const updateProjectItem = createAsyncThunk(
  "Projects/updateeProject",
  async ({ itemId, newInfo }) => {
    const updatedItem = await ProjectsService.updateProject({
      itemId,
      newInfo,
    });
    return updatedItem ;
  }
);
export const deleteProjectItem = createAsyncThunk(
  "Projects/deleteProject",
  async ({ itemId }) => {
    const deleteItem = await ProjectsService.deleteProject({ itemId });
    console.log(deleteItem);
    return { deleteItem };
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
    [createProjectItem.fulfilled]: (state, { payload }) => {
      const { createdItem } = payload;
      state.projects.push({ createdItem });
    },
    [createProjectItem.rejected]: (state, { error }) => {
      state.error = error.message;
    },
    [updateProjectItem.fulfilled]: (state, { payload }) => {
      const { newInfo, itemId } = payload;
      console.log({ newInfo, itemId });
      const project = state.projects.find((x) => x.id === itemId);
      project.data = project.data.map((x) => (x.id === itemId ? itemId : x));
    },
    [updateProjectItem.rejected]: (state, { error }) => {
      state.error = error.message;
    },
    [deleteProjectItem.fulfilled]: (state, { payload }) => {
      const { deleteItem } = payload;
      const project = state.projects.find((x) => x.id === deleteItem);
      project.data = project.data.filter((x) => x.id !== deleteItem);
    },
    [deleteProjectItem.rejected]: (state, { error }) => {
      state.error = error.message;
    },
  },
});

export const { deleteError } = ProjectsSlice.actions;

export const collectionErrorSelector = (state) => state.Projects.error;
export const ProjectsSelector = (state) => state.projects.projects;

export default ProjectsSlice.reducer;
