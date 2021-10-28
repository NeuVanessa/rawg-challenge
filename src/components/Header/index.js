import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { SimpleContainer } from "./styles";
const Header = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <SimpleContainer onClick={toggleHome}> RAWG CHALLENGE </SimpleContainer>
  );
};

export default Header;
