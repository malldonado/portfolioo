import { useState, useEffect } from "react";
import axios from "axios";

function useAbout() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://malldonado-backend.vercel.app/about/latest");
        const { title, text } = response.data;
        setTitle(title);
        setText(text);
      } catch (error) {
        console.error("Error fetching latest data:", error);
      }
    };

    fetchData();
  }, []);

  const handleTextChange = (e) => setText(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setText((prevText) => prevText + "\n");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = createFormData({ title, text, file });

    try {
      const response = await submitFormData(formData);
      console.log("Response:", response.data);
      setStatus("success");
    } catch (error) {
      console.error("Error submitting data:", error);
      setStatus("error");
    }
  };

  const createFormData = ({ title, text, file }) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("text", text);
    formData.append("file", file);
    return formData;
  };
  
  const submitFormData = async (formData) => {
    const response = await axios.put("https://malldonado-backend.vercel.app/about", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  };

  return {
    title,
    text,
    file,
    status,
    setTitle,
    setText,
    setFile,
    handleTextChange,
    handleKeyPress,
    handleSubmit,
  };
}

export default useAbout;
