import React from "react";
// import Project1 from "../../../images/project2.png";
// import Project2 from "../../../images/project1.png";
import { Link } from "react-router-dom";

function CardOne() {
  return (
    <div className="md:flex md:justify-center max-w-[1200px] mx-auto pt-10 md:h-[700px] mb-[130px] md:mb-[200px] md:mt-[100px] mt-[0px]">
      <div className="md:w-[50%] mt-20 md:ml-[90px] px-4 md:px-0 mb-4 md:mb-0">
        <span className="text-white md:text-[60px] text-[40px]">
          VEJA MAIS <br /> SOBRE MIM
        </span>
        <span className="text-white block mt-4 max-w-[500px] md:text-[20px] opacity-70">
        Sou graduado em Análise e Desenvolvimento de Sistemas pela fatec de americana e estou aprimorando meu inglês na Influx. Minha experiência abrange o desenvolvimento front-end em um projeto de tcc focado na adoção de animais, além de atuar como desenvolvedor full stack na Performa.ai, onde integrei lojas virtuais em diversas plataformas de e-commerce. Atualmente, trabalho na Junco Móveis na área de infraestrutura.
        </span>
      </div>
      <Link
        to={"/about"}
        className="md:w-[50%] md:flex md:justify-start items-center ml-3 relative w-full"
      >
        <div className="cursor-pointer md:px-0 px-4">
          {/* <img
            className="md:h-[450px] md:w-[350px] h-[450px] object-cover w-full md:object-none"
            src={Project1}
            alt=""
          /> */}
        </div>
        <div className="md:absolute md:bottom-[20px] md:left-[130px] cursor-pointer md:px-0 px-4 mt-4 md:mt-0">
          {/* <img
            className="md:h-[400px] md:w-[320px] h-[450px] object-cover w-full md:object-none"
            src={Project2}
            alt=""
          /> */}
        </div>
      </Link>
    </div>
  );
}

export default CardOne;
