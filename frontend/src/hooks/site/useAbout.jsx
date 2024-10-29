import React, { useState, useEffect } from "react";
import axios from "axios";

function useAbout() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/about/latest")
      .then((response) => {
        setAboutData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching latest data:", error);
      });
  }, []);

  return { aboutData }
}

export default useAbout