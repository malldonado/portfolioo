import { FaWhatsappSquare } from "react-icons/fa";

function ButtonWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-50 text-[50px] text-[#42ea60] rounded-md bg-white cursor-pointer">
      <a href="https://api.whatsapp.com/send/?phone=5519989340806"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsappSquare />
      </a>
    </div>
  );
}

export default ButtonWhatsApp;
