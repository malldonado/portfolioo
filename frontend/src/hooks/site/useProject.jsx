// hooks/site/useProject.js
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

function useProject(projectId) {
  const { id } = useParams();  // Pega o ID da URL
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      setIsLoading(true);
      setError(null);

      if (!id) {
        setError("ID do projeto não encontrado.");
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get(`https://malldonado-backend.vercel.app/project/post/${id}`);
        const projectData = response.data;

        setProject({
          id: projectData._id,
          title: projectData.title,
          description: projectData.description,
          image: projectData.images?.[0]
            ? `https://malldonado-backend.vercel.app/uploads/${projectData.images[0]}`
            : null,
        });
      } catch (err) {
        console.error('Erro ao carregar o projeto:', err);
        setError(err.response?.data?.message || "Não foi possível carregar o projeto.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  return { project, isLoading, error };
}

export default useProject;


