import React, { createContext, useMemo, useState, useEffect } from "react";
import ProjectsService from "../../../services/projects-service";

export const ProjectsContext = createContext();

const DataProvider = ({children}) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    (async () => {
      const fetchedProjects = await ProjectsService.fetchProjects();
      setProjects(fetchedProjects);
      setLoading(false);
    })();
  }, []);
    
    
    const contextValue = useMemo(
      () => ({
        projects,
        loading,
      }),
      [projects, loading]
    );
  return (
    <ProjectsContext.Provider value={contextValue}>
      {children}
    </ProjectsContext.Provider>
  );
}

export default DataProvider;