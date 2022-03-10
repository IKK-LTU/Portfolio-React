import React, { createContext, useMemo, useState, useEffect } from "react";
import ProjectsService from "../../../services/projects-service";
import BlogsService from "../../../services/blogs-service";

export const DataContext = createContext();

const DataProvider = ({children}) => {
    const [projects, setProjects] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    (async () => {
      const fetchedProjects = await ProjectsService.fetchProjects();
      const fetchedBlogs = await BlogsService.fetchBlogs();
      setProjects(fetchedProjects);
      setBlogs(fetchedBlogs);
      setLoading(false);
    })();
  }, []);
    
    
    const contextValue = useMemo(
      () => ({
        projects,
        blogs,
        loading,
      }),
      [projects,blogs, loading]
    );
  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;