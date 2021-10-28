import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { SimpleContainer } from "./styles";
const SimpleCarousel = () => {
  return (
    <SimpleContainer>
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img src="https://www.positronx.io/wp-content/uploads/2019/12/react-carousel-7870-01.png" />
        </div>
        <div>
          <img src="https://www.positronx.io/wp-content/uploads/2019/12/react-carousel-7870-01.png" />
        </div>
        <div>
          <img src="https://www.positronx.io/wp-content/uploads/2019/12/react-carousel-7870-01.png" />
        </div>
      </Carousel>
    </SimpleContainer>
  );
};

export default SimpleCarousel;
