import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProjectsService from '../../../services/projects-service';

const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        (async () => {
            if (searchParams.get('category')) {
                const fetchedProjects = await ProjectsService.fetchProjects(searchParams);
                setProjects(fetchedProjects);
            }
        })()
    }, [searchParams])

    return projects;
};

export default useProjects;
