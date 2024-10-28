import { IoMdArrowForward } from "react-icons/io";
import useMessage from "../../../hooks/site/useMessage";

function Message() {
  const { success, formData, handleChange, handleSubmit, handleSendMessage } =
    useMessage();

  return (
    <div className="max-w-[1010px] md:flex md:justify-center md:items-top text-white mx-auto md:mt-[200px] px-4 md:px-0">
      <div className="md:w-[55%] md:pr-5 md:ml-4 xl:ml-0">
        <span className="text-center md:text-[50px] text-[40px] leading-tight mb-4">
            SINTA-SE À VONTADE
            <br/>
            PARA ME CONTATAR
        </span>
        <span className="block md:mt-5 md:text-[18px] opacity-70 mb-10 md:mb-0 mt-14">
        Sinta-se à vontade para entrar em contato comigo, caso queira discutir propostas de vagas ou projetos em que posso colaborar. 
        </span>
      </div>
      <div className="md:w-[50%] overflow-hidden">
        <form
          className="max-w-[100%] md:ml-5 overflow-hidden"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="h-[50px] w-full border-2 border-[#bbb9b9] bg-transparent p-2 outline-none mb-5 placeholder:opacity-80 font-medium text-white"
            placeholder="Coloque seu nome"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            className="h-[50px] w-full border-2 border-[#bbb9b9] bg-transparent p-2 outline-none mb-5 placeholder:opacity-80 font-medium text-white"
            placeholder="Coloque seu endereço de email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="number"
            className="h-[50px] w-full border-2 border-[#bbb9b9] bg-transparent p-2 outline-none mb-5 placeholder:opacity-80 font-medium text-white overflow-hidden"
            placeholder="Coloque seu número de telefone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            className="w-full h-[150px] bg-transparent outline-none border-2 border-[#bbb9b9] p-2 resize-none placeholder:opacity-80 font-medium text-white"
            placeholder="Escreva sua mensagem"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <button
            className="flex justify-center items-center text-white bg-[#af9155] hover:bg-[#7d5e21] transition duration-150 ease-in-out h-[50px] w-[160px] mt-5"
            onClick={handleSendMessage}
          >
            Enviar
            <IoMdArrowForward />
          </button>
          {success && (
            <div className="text-white mb-3 text-xl mt-4">
              Agradeço por seu contato e em breve retornarei!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Message;
