import Banner from "../../../images/banner.svg";

function Left() {
  return (
    <div className="md:w-[60%] hidden md:block">
      <div className="w-[100%] h-full bg-black flex justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <img src={Banner} className="h-auto my-auto mr-20 w-[450px]" alt="" />
          {/* <h2 className="text-white text-left text-4xl mt-10 w-full opacity-60 overflow-hidden">
            malldonado
          </h2> */}
        </div>
      </div>
    </div>
  );
}

export default Left;
