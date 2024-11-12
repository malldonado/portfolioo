import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-slideshow-image/dist/styles.css";

function useBannerProjects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://malldonado-backend.vercel.app/posts/favorite");
      setData(response.data.data || []);
    };
    fetchData();
  }, []);
  return { data };
}

export default useBannerProjects;
