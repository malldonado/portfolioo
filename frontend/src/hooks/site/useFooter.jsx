import React, { useState, useEffect } from "react";
import axios from "axios";
function useFooter() {
  const [formData, setFormData] = useState({});

  //useEffect to loading data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("https://malldonado-backend.vercel.app/user-update");
        setFormData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);
  return {
    formData,
  };
}

export default useFooter;