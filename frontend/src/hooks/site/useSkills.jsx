import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Card1 from "../../images/skills/1.svg";
import Card2 from "../../images/skills/2.svg";
import Card3 from "../../images/skills/3.svg";
import Card4 from "../../images/skills/4.svg";
import Card5 from "../../images/skills/5.svg";
import Card6 from "../../images/skills/6.svg";
import Card7 from "../../images/skills/7.svg";
import Card8 from "../../images/skills/8.svg";
import Card9 from "../../images/skills/9.svg";
import Card10 from "../../images/skills/10.svg";
import Card11 from "../../images/skills/11.svg";
import Card12 from "../../images/skills/12.svg";
import Card13 from "../../images/skills/13.svg";
import Card14 from "../../images/skills/14.svg";
import Card15 from "../../images/skills/15.svg";
import Card16 from "../../images/skills/16.svg";
import Card17 from "../../images/skills/17.svg";
import Card18 from "../../images/skills/18.svg";

import "react-slideshow-image/dist/styles.css";

const cards = [
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  Card7,
  Card8,
  Card9,
  Card10,
  Card11,
  Card12,
  Card13,
  Card14,
  Card15,
  Card16,
  Card17,
  Card18,
];

function useSkills() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const slidesPerPageMobile = 6;
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

  const zoomInProperties = {
    scale: 1.4,
    duration: 5000,
  };
  

  const handleSlideChange = (previousIndex, nextIndex) => {
    setCurrentIndex(nextIndex);
  };
  return {
    currentIndex,
    isMobile,
    zoomInProperties,
    handleSlideChange,
    cards,
    slidesPerPageMobile,
    slidesPerPageDesktop,
    properties
  };
}

export default useSkills;
