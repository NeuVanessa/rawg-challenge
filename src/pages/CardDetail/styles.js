import styled from "styled-components";
import { Button } from "@material-ui/core";
export const GameSection = styled.div`
  top: 120px;
  left: 85px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(34, 51, 67);
  height: 75%;
  width: 87%;
`;

export const ContainerRight = styled.div`
  width: 40%;
  height: 79%;
  color: white;
  background-color: rgb(34, 51, 67);
  &:hover {
    color: black;
    background: white;
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
    width: 80%;
    flex-direction: column;
    margin-bottom: 15px;
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
`;
export const Released = styled.h3`
  font-size: 15px;
  position: relative;
  left: 15px;
  top: 5px;
  &:hover {
    color: #d3d3d3;
  }
`;

export const Rating = styled.h3`
  font-size: 15px;
  position: relative;
  left: 15px;
  top: 10px;
  &:hover {
    color: #d3d3d3;
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
    color: #d3d3d3;
  }
`;

export const ButtonLabel = styled.label`
  //background-color: black;
  top: 10rem;
  right: 0;
  position: fixed;
  transform: translate(0, 24px) scale(1);
`;

export const ButtonUI = styled(Button)`
  bottom: 45px;
  left: -10px;
  padding: 8px 10px;
  line-height: 1.2;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 1px rgba(255, 255, 255, 0.6);
  font-size: 20px;
  background-color: #3f51b5;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: rgb(34, 51, 67);
  }
`;
