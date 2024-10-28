import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import useServices from "../../../hooks/site/useSkills";

function Skills() {
  const { cards } = useServices();
  const slidesPerPageMobile = 3;
  const slidesPerPageDesktop = 9;

  const properties = {
    duration: 5000,
    transitionDuration: 1000,
    infinite: true,
    indicators: false,
    onChange: (oldIndex, newIndex) => {
      console.log(`Slide transitioned from ${oldIndex} to ${newIndex}`);
    },
  };

  const getSlides = () => {
    const totalSlides = Math.ceil(cards.length / slidesPerPageDesktop);
    return Array.from({ length: totalSlides }, (_, slideIndex) => (
      <div key={slideIndex} className="grid grid-cols-6 md:grid-cols-9 gap-4">
        {cards.slice(slideIndex * slidesPerPageDesktop, slideIndex * slidesPerPageDesktop + slidesPerPageDesktop).map((card, index) => (
          <div key={index} className="bg-black/15 h-[250px] relative">
            <div className="flex items-center justify-center h-full">
              <img
                className="object-cover w-full"
                src={card}
                alt={`Skill Icon ${slideIndex * slidesPerPageDesktop + index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="max-w-[1050px] mx-auto mt-[100px] md:mt-[200px] px-4 md:px-0">
      <h2 className="text-white md:flex md:justify-center md:text-[50px] text-[40px] md:mb-4 px-2">
        SKILLS
      </h2>
      <Slide {...properties}>
        {getSlides()}
      </Slide>
    </div>
  );
}

export default Skills;
