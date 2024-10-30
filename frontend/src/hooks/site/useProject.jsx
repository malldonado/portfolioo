// hooks/site/useProject.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const useProject = (projectId) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`/project/image/${projectId}`);
        setImageSrc(response.data.image);
      } catch (err) {
        setError(err.response ? err.response.data.message : err.message);
      }
    };

    if (projectId) {
      fetchImage();
    }
  }, [projectId]);

  return { imageSrc, error };
};

export default useProject;
