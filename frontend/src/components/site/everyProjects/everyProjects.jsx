import Image from "../../../images/project1.png";
import Image2 from "../../../images/project2.png";
import { Link } from "react-router-dom";

function everyProjects() {
  return (
    <div className="max-w-[1000px] mx-auto mt-14 px-4 md:px-0">
      <Link
        to={"/projeto"}
        className="md:flex md:justify-between cursor-pointer md:items-center mt-10 w-full"
      >
        <div className="md:w-[50%] md:mr-[30px]">
          <img className="h-[270px] w-full" src={Image} alt="" />
        </div>
        <div className="text-white md:w-[50%] md:ml-[30px] mt-5 md:mt-0">
          <span className="text-3xl">
            Admmiz Engenharia Civil ERP
          </span>
          <p className="mt-2">
            Admmiz é um sistema de gerenciamento de estoque que abrange a gestão
            de fornecedores, clientes, unidades, categorias, produtos, compras,
            faturas e estoque. O frontend é desenvolvido com ReactJS, Next.js e
            TailwindCSS, utilizando TypeScript para garantir segurança e
            escalabilidade...
          </p>
          <Link className="h-[40px] w-[100px] text-[14px] text-white bg-[#af9155] mt-6 cursor-pointer justify-center items-center flex">
            Ver mais
          </Link>
        </div>
      </Link>
      <Link
        to={"/projeto"}
        className="md:flex md:justify-between cursor-pointer md:items-center mt-10 w-full"
      >
        <div className="md:w-[50%] md:mr-[30px]">
          <img className="h-[270px] w-full" src={Image2} alt="" />
        </div>
        <div className="text-white md:w-[50%] md:ml-[30px] mt-5 md:mt-0">
          <span className="text-3xl">
            Admmiz Engenharia Civil ERP
          </span>
          <p className="mt-2">
            Admmiz é um sistema de gerenciamento de estoque que abrange a gestão
            de fornecedores, clientes, unidades, categorias, produtos, compras,
            faturas e estoque. O frontend é desenvolvido com ReactJS, Next.js e
            TailwindCSS, utilizando TypeScript para garantir segurança e
            escalabilidade...
          </p>
          <Link className="h-[40px] w-[100px] text-[14px] text-white bg-[#af9155] mt-6 cursor-pointer justify-center items-center flex">
            Ver mais
          </Link>
        </div>
      </Link>
    </div>
  );
}

export default everyProjects;
