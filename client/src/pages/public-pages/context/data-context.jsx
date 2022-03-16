import React, { createContext, useMemo, useState, useEffect } from "react";
import ProjectsService from "../../../services/projects-service";
import BlogsService from "../../../services/blogs-service";
import TechnologiesService from "../../../services/technologies-service";

export const DataContext = createContext();

const DataProvider = ({children}) => {
    const [projects, setProjects] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [technologies, setTechnologies] = useState([]);
    const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    (async () => {
      const fetchedProjects = await ProjectsService.fetchProjects();
      const fetchedBlogs = await BlogsService.fetchBlogs();
      const fetchTechnologies = await TechnologiesService.fetchTechnologies();
      setProjects(fetchedProjects);
      setBlogs(fetchedBlogs);
      setTechnologies(fetchTechnologies);
      setLoading(false);
      

    })();
  }, []);
    
    
    const contextValue = useMemo(
      () => ({
        projects,
        blogs,
        loading,
        technologies
      }),
      [projects,blogs,technologies, loading]
    );
  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;