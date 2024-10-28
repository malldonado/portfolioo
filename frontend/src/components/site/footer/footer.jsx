import { FaGithub, FaInstagram, FaLinkedin, FaDribbble } from "react-icons/fa";
import { Link } from "react-router-dom";
import useFooter from "../../../hooks/site/useFooter";

function Footer() {

  const { formData } = useFooter();

  return (
    <div className="w-full mt-[100px] md:mt-[150px] h-full">
      <div className="md:flex block w-full text-center md:text-left md:justify-center md:items-center h-full">
        <div className="items-center md:w-[30%] flex justify-center mb-[30px] w-full">
          <ul className="text-white">
            <li className="md:mb-12 mb-2 mt-12 overflow-hidden">
              <Link to="/">
                <span className="text-white hover:text-[#af9155] text-3xl text-center opacity-60">malldonado</span>
              </Link>
            </li>
            <li className="flex justify-center gap-3 opacity-60">
              <a
                href={formData.instagram}
                className="text-[26px] cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="fill-white hover:fill-[#af9155]" />
              </a>
              <a
                href={formData.linkedin}
                className="text-[26px] cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="fill-white hover:fill-[#af9155]" />
              </a>
              <a
                href={formData.github}
                className="text-[26px] cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="fill-white hover:fill-[#af9155]" />
              </a>
              <a
                href={formData.dribbble}
                className="text-[26px] cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDribbble className="fill-white hover:fill-[#af9155]" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <span className="text-white text-[12px] md:text-[16px] text-center md:flex md:justify-center md:align-bottom mt-6 pb-8 font-light opacity-75 block">
        © Matheus Maldonado all rights 2024 - Designed by{" "}
        <Link
          className="pl-1 hover:underline md:decoration-white"
          to={"http://malldonado.vercel.app"}
        >
          {" "}
          malldonado
        </Link>
      </span>
    </div>
  );
}

export default Footer;
