import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { HiMiniWallet, HiMiniSquare3Stack3D } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { IoBusiness, IoArrowBackSharp } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { RiMessageFill } from "react-icons/ri";
import "../../App.css";

function useSidebar() {
  const location = useLocation();
  const meRoute = location.pathname.split("-")[0] === "/project";
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isOpen, setIsOpen] = useState(false); // estado para controlar a abertura e fechamento da barra lateral

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const items = meRoute
    ? [
        {
          id: 1,
          label: "Projeto",
          route: "/project-panel",
          emoji: <FaFileAlt className="w-5 h-5 text-white mr-2" />,
        },
        {
          id: 2,
          label: "Voltar",
          route: "/projects-panel",
          emoji: <IoArrowBackSharp className="w-5 h-5 text-white mr-2" />,
        },
      ]
    : [
        {
          id: 1,
          label: "Postes",
          route: "/panel",
          emoji: <HiMiniWallet className="w-5 h-5 text-white mr-2" />,
        },
        {
          id: 2,
          label: "Projetos",
          route: "/projects-panel",
          emoji: <HiMiniSquare3Stack3D className="w-5 h-5 text-white mr-2" />,
        },
        {
          id: 3,
          label: "Sobre",
          route: "/about-panel",
          emoji: <IoBusiness className="w-5 h-5 text-white mr-2" />,
        },
        {
          id: 4,
          label: "Mensagem",
          route: "/message-panel",
          emoji: <RiMessageFill className="w-5 h-5 text-white mr-2" />,
        },
        {
          id: 5,
          label: "Configurações",
          route: "/settings-panel",
          emoji: <IoMdSettings className="w-5 h-5 text-white mr-2" />,
        },
      ];
  return {
    location,
    isMobile,
    isOpen,
    toggleSidebar,
    items,
    meRoute,
    setIsOpen,
  };
}

export default useSidebar;
