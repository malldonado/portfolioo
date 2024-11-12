import React, { useState, useEffect } from "react";
import axios from "axios";

function useProject() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [files, setFiles] = useState([]);
    const [status, setStatus] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://malldonado-backend.vercel.app/project/post");
          const { title, description } = response.data;
          setTitle(title);
          setDescription(description);
        } catch (error) {
          console.error("Error fetching latest data:", error);
        }
      };
      fetchData();
    }, []);
  
    const handleTextChange = (e) => {
      setTitle(e.target.value);
    };
  
    const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
    };
  
    const handleFileChange = (e) => {
      const fileList = Array.from(e.target.files);
      setFiles([...files, ...fileList]);
    };
  
    const handleDelete = (url) => {
      setFiles(files.filter((file) => file.url !== url));
    };
  
    const handleSubmit = async () => {
      try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        files.forEach((file) => formData.append('images', file)); 
        console.log(formData)
        console.log(files)
        
        const response = await axios.post("https://malldonado-backend.vercel.app/project/post", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        
        const project = response.data;
        console.log("Projeto salvo:", project);
      } catch (error) {
        console.error("Erro ao enviar dados:", error);
        setStatus("error");
      }
    };
    
    return {
      title,
      description,
      files,
      status,
      handleTextChange,
      handleDescriptionChange,
      handleFileChange,
      handleDelete,
      handleSubmit
    }
}

export default useProject