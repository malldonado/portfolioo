import { useState, useEffect } from "react";
import axios from "axios";

function useEveryProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get("http://localhost:8000/project/post/all");
        const projectsData = response.data.data.map((project) => ({
          id: project._id,
          title: project.title,
          description: project.description,
          image: project.images?.[0] ? `http://localhost:8000/uploads/${project.images[0]}` : null
        }));
        setProjects(projectsData);
      } catch (error) {
        setError("Não foi possível carregar os projetos.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { projects, isLoading, error };
}

export default useEveryProjects;
