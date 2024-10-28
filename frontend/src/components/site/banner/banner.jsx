import { FaGithub, FaInstagram, FaLinkedin, FaDribbble } from "react-icons/fa";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import useBanner from "../../../hooks/site/useBanner";

function Banner() {
  const { data, formData, zoomInProperties } = useBanner();

  const renderSocialIcon = (key) => {
    const iconClasses = "fill-white hover:fill-[#af9155] text-[22px]";

    switch (key) {
      case "instagram":
        return <FaInstagram className={iconClasses} />;
      case "linkedin":
        return <FaLinkedin className={iconClasses} />;
      case "github":
        return <FaGithub className={iconClasses} />;
      case "dribbble":
        return <FaDribbble className={iconClasses} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-black/50 h-[600px] flex">
      {/* Slideshow de Imagens */}
      <div className="w-[90%] relative">
        <div className="slideshow-container">
          {data && data.length > 0 ? (
            <Slide {...zoomInProperties}>
              {data.map((item, index) => (
                <div className="each-slide" key={index}>
                  <div className="flex items-center justify-center bg-cover bg-center h-[600px] overflow-hidden relative">
                    {item.title && (
                      <h1 className="text-white font-bold text-4xl md:text-7xl absolute bottom-6 left-10 overflow-hidden md:h-[100px] drop-shadow-2xl">
                        {item.title}
                      </h1>
                    )}
                    {item.image && (
                      <img
                        className="z-[-1] relative object-cover w-full md:h-full h-full opacity-80"
                        src={`http://localhost:8000/uploads/${item.image}`}
                        alt={item.title || "Banner Image"}
                      />
                    )}
                  </div>
                </div>
              ))}
            </Slide>
          ) : (
            <div className="text-white">No data available</div>
          )}
        </div>
      </div>

      {/* Ícones de Redes Sociais */}
      <div className="w-[10%] bg-black h-full flex justify-center items-center flex-col">
        <span className="text-white text-[30px] writing-vertical-rl mb-10">
          malldonado
        </span>
        <div>
          {formData &&
            Object.entries(formData).map(([key, value]) => (
              value && (
                <a
                  key={key}
                  href={value}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-center items-center mb-10 cursor-pointer"
                >
                  {renderSocialIcon(key)}
                </a>
              )
            ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
