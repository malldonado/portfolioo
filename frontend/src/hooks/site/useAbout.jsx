import React, { useState, useEffect } from "react";
import axios from "axios";

function useAbout() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    axios
      .get("https://malldonado-backend.vercel.app/about/latest")
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