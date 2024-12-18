import React, { useState, useEffect } from "react";
import axios from "axios";

function useSettings() {
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    instagram: "",
    linkedin: "",
    github: "",
    dribbble: "",
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "https://malldonado-backend.vercel.app/user-update",
        formData
      );
      console.log(response.data);
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return {
        status,
        formData,
        handleChange,
        handleSubmit,  
    }
}

export default useSettings;