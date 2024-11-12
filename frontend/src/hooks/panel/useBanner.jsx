import React, { useState, useEffect } from "react";
import axios from "axios";

function useBanner() {
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

  const renderParagraphs = (text) => {
    const paragraphs = text.split("\n");
    return paragraphs.map((paragraph, index) => (
      <p key={index} style={{ marginBottom: "5px" }}>{paragraph}</p>
    ));
  };
  return {
        aboutData,
        renderParagraphs,
    }
}


export default useBanner