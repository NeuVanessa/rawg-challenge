import styled from "styled-components";
import { Button } from "@material-ui/core";
import colors from "../../utils/colors";
export const GameSection = styled.div`
  top: 120px;
  left: 85px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  height: 75%;
  width: 87%;

  @media screen and (max-width: 550px) {
    left: 0px;
    background-color: ${colors.primary};
    width: 100%;
  }
`;

export const ContainerRight = styled.div`
  width: 40%;
  height: 79%;
  color: white;
  background-color: ${colors.primary};
  &:hover {
    color: ${colors.activeTextFooter};
    background: ${colors.secundary};
    transition: 0.5s ease-out;
    -webkit-box-shadow: rgba(0, 0, 0, 0.8) 15px 20px 30px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    -moz-box-shadow: rgba(0, 0, 0, 0.8) 15px 20px 30px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    -o-box-shadow: rgba(0, 0, 0, 0.8) 15px 20px 30px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    box-shadow: rgba(0, 0, 0, 0.8) 15px 20px 30px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
  }

  @media screen and (max-width: 550px) {
    left: 0px;
    width: 100%;
    font-size: 15px;
  }
`;

export const ContainerLeft = styled.div`
  width: 60%;
  height: 80%;
  bottom: 150px;
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

export const Title = styled.h4`
  font-size: 30px;
  text-align: center;

  @media screen and (max-width: 550px) {
    font-size: 20px;
  }
`;
export const Released = styled.h3`
  font-size: 15px;
  position: relative;
  left: 15px;
  top: 5px;
  &:hover {
    color: ${colors.activeText};
  }
`;

export const Rating = styled.h3`
  font-size: 15px;
  position: relative;
  left: 15px;
  top: 10px;
  &:hover {
    color: &{colors.activeText};
  }
`;

export const TitleGenres = styled.h4`
  font-size: 30px;
  text-align: center;
`;

export const TitlePlatforms = styled.h4`
  font-size: 30px;
  text-align: center;
`;

export const Genres = styled.h4`
  display: flex;
  font-size: 17px;
  left: 15px;
  position: relative;
  &:hover {
    color: ${colors.activeText};
  }
`;

export const ButtonLabel = styled.label`
  top: 10rem;
  right: 0;
  position: fixed;
  transform: translate(0, 24px) scale(1);
`;

export const ButtonUI = styled(Button)`
  bottom: 4.2rem;
  height:3.5rem;
  left: -10px;
  padding: 8px 10px;
  line-height: 1.2;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 1px rgba(255, 255, 255, 0.6);
  font-size: 2rem;
  background-color:${colors.activeTextFooter};
  color: &{colors.secundary};
  cursor: pointer;
`;
