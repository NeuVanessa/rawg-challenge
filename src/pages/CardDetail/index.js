import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import api from "../../services/api";
import {
  GameSection,
  ButtonLabel,
  ButtonUI,
  Title,
  Released,
  ContainerRight,
  ContainerLeft,
  Rating,
  Genres,
  TitleGenres,
  TitlePlatforms,
} from "./styles";

const CardDetail = (props) => {
  const history = useHistory();
  const { game } = props.location.gameProps;

  const [developers, setDevelopers] = useState([]);

  const fetchDevelopers = async () => {
    const { data } = await api.get(`creators?`);
    console.log(data.results);
    setDevelopers(data.results);
  };

  useEffect(() => {
    fetchDevelopers();
  }, []);

  return (
    <GameSection>
      <ButtonLabel>
        <ButtonUI onClick={() => history.push("/")}>INICIO</ButtonUI>
      </ButtonLabel>
      <ContainerLeft>
        <Carousel infiniteLoop useKeyboardArrows autoPlay>
          {game.short_screenshots.map((i) => (
            <img src={i.image} alt="screenshot" />
          ))}
        </Carousel>
      </ContainerLeft>

      <ContainerRight>
        <Title>{game.name}</Title>
        <Released>Released:{game.released}</Released>
        <Rating>Rating: {game.rating}</Rating>

        <TitleGenres>Genres</TitleGenres>
        <br />
        <Genres>
          {game.genres.map((g) => (
            <h1>{`${g.name} | `}</h1>
          ))}
        </Genres>
        <TitlePlatforms>Platforms:</TitlePlatforms>
        <br />
        <Genres>
          {game.platforms.map((p) => (
            <h1>{`${p.platform.name} | `}</h1>
          ))}
        </Genres>
        <br />
        <TitlePlatforms>Developers:</TitlePlatforms>
        {developers.map((developer) => (
          <Genres>
            <h2> {developer.name}</h2>
          </Genres>
        ))}
      </ContainerRight>
    </GameSection>
  );
};

export default CardDetail;
