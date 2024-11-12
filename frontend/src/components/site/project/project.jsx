import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import useProject from "../../../hooks/site/useProject";

const Slideshow = () => {
  const { project, isLoading, error } = useProject();

  if (isLoading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        Carregando...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  if (!project) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        Nenhum projeto encontrado
      </div>
    );
  }

  return (
    <div className="w-full h-auto mt-10 max-w-5xl mx-auto overflow-hidden">
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div className="flex items-center justify-center h-[250px] md:h-[500px]">
              {project.image ? (
                <img
                  className="w-full h-[250px] md:h-[500px]"
                  src={project.image}
                  alt={project.title}
                />
              ) : (
                <div className="w-full h-[250px] flex items-center justify-center bg-gray-300 md:h-[500px]">
                  Sem imagem
                </div>
              )}
            </div>
          </div>
        </Slide>
      </div>
      <div className="text-white mt-6 px-4 md:mt-6 md:px-0">
        <h2 className="md:text-[40px] text-[30px]">{project.title}</h2>
        <p className="mt-4 text-xl text-white">{project.description}</p>
      </div>
    </div>
  );
};

export default Slideshow;