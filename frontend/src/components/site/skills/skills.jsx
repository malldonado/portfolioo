import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import useSkills from "../../../hooks/site/useSkills";

function Skills() {
  const {
    currentIndex,
    cards,
    isMobile,
    zoomInProperties,
    handleSlideChange,
    slidesPerPageMobile,
    slidesPerPageDesktop,
    properties,
  } = useSkills();

  const getSlides = () => {
    const totalSlides = Math.ceil(cards.length / slidesPerPageDesktop);
    return Array.from({ length: totalSlides }, (_, slideIndex) => (
      <div key={slideIndex} className="grid grid-cols-6 md:grid-cols-9 gap-4">
        {cards
          .slice(
            slideIndex * slidesPerPageDesktop,
            slideIndex * slidesPerPageDesktop + slidesPerPageDesktop
          )
          .map((card, index) => (
            <div key={index} className="bg-black/15 h-[250px] relative">
              <div className="flex items-center justify-center h-full">
                <img
                  className="object-cover w-full"
                  src={card}
                  alt={`Skill Icon ${
                    slideIndex * slidesPerPageDesktop + index + 1
                  }`}
                />
              </div>
            </div>
          ))}
      </div>
    ));
  };

  const getMobileSlides = () => {
    const totalSlides = Math.ceil(cards.length / slidesPerPageMobile);
  
    return Array.from({ length: totalSlides }, (_, slideIndex) => {
      const startIndex = slideIndex * slidesPerPageMobile;
      const slideCards = cards.slice(startIndex, startIndex + slidesPerPageMobile);
  
      return (
        <div key={slideIndex} className="grid grid-cols-6 gap-4">
          {slideCards.map((card, index) => (
            <div key={index} className="bg-black/15 h-[250px] relative">
              <div className="flex items-center justify-center h-full">
                <img
                  className="object-cover w-full"
                  src={card}
                  alt={`Skill Icon ${startIndex + index + 1}`}
                />
              </div>
            </div>
          ))}
          {/* Preencher espaços vazios se necessário */}
          {slideCards.length < slidesPerPageMobile && 
            Array.from({ length: slidesPerPageMobile - slideCards.length }).map((_, emptyIndex) => (
              <div key={`empty-${emptyIndex}`} className="h-[250px] bg-transparent" />
            ))
          }
        </div>
      );
    });
  };  

  return (
    <>
      {isMobile ? (
      <div className="max-w-[1050px] mx-auto mt-[100px] md:mt-[200px] px-4 md:px-0">
        <h2 className="text-white md:flex md:justify-center md:text-[50px] text-[40px] md:mb-4 px-2">
          SKILLS
        </h2>
        <Slide {...properties}>{getMobileSlides()}</Slide>
      </div>
      ) :(
        <div className="max-w-[1050px] mx-auto mt-[100px] md:mt-[200px] px-4 md:px-0">
        <h2 className="text-white md:flex md:justify-center md:text-[50px] text-[40px] md:mb-4 px-2">
          SKILLS
        </h2>
        <Slide {...properties}>{getSlides()}</Slide>
      </div>
      )}
    </>
  );
}

export default Skills;
