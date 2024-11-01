import React from "react";
import About from "../../../images/about.jpg";
import { Link } from "react-router-dom";

function CardOne() {
  return (
    <div className="md:flex md:justify-center max-w-[1200px] mx-auto pt-10 md:h-[700px] mb-[130px] md:mb-[200px] md:mt-[100px] mt-[0px]">
      <div className="md:w-[60%] mt-20 md:ml-[90px] px-4 md:px-0 mb-4 md:mb-0">
        <span className="text-white md:text-[60px] text-[40px]">
          VEJA MAIS <br /> SOBRE MIM
        </span>
        <span className="text-white block mt-4 max-w-[500px] md:text-[20px] opacity-70">
        Sou graduado em Análise e Desenvolvimento de Sistemas pela FATEC Americana e atualmente aprimoro meu inglês na Influx para expandir habilidades de comunicação. Tenho experiência em front-end, adquirida em um projeto de TCC para adoção de animais, onde contribuí para uma plataforma intuitiva que facilita o processo de adoção. Como desenvolvedor full-stack no Performa.ai, realizei integrações para e-commerces, otimizando a experiência do usuário com soluções escaláveis. Atualmente, sou analista de TI na Móveis Junco, gerenciando servidores e auxiliando na manutenção de equipamentos e infraestrutura de rede.
        </span>
      </div>
      <Link
        to={"/about"}
        className="md:w-[50%] md:flex md:justify-start items-end ml-3 relative w-full overflow-hidden"
      >
        <div className="cursor-pointer md:px-0 px-4">
          <img
            className="md:w-full md:h-full w-full h-auto"
            src={About}
            alt=""
          />
        </div>
      </Link>
    </div>
  );
}

export default CardOne;
