import React, { useState, useEffect } from "react";
import {
  CardSimple,
  Card,
  SimpleBox,
  Image,
  CardDetails,
  Title,
  Description,
  Search,
  Loading,
} from "./styles.js";
import api from "../../services/api";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Footer from "../FooterContainer/index";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
}));

export const Cards = () => {
  const [games, setGames] = useState([]);
  const [setName] = useState("");

  const fetchGames = async () => {
    const { data } = await api.get(`games?`);
    console.log(data.results);
    setGames(data.results);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <>
      <SimpleBox>
        {games.length > 0 ? (
          <Search onChange={(e) => setName(e.target.value)} />
        ) : null}
        <CardSimple container spacing={2} columns={16}>
          {games.length > 0 ? (
            games.map((game) => (
              <Card item xs={6} key={game.id}>
                <Link
                  key={game.id}
                  to={{
                    pathname: `/games/${game.id}`,
                    gameProps: {
                      game: game,
                    },
                  }}
                >
                  <Image
                    component="img"
                    image={game.background_image}
                    alt={game.name}
                  />
                  <Item key={game.id}>
                    <CardDetails align="left">
                      <Title> {game.name}</Title>
                      <Description>{game.released} </Description>
                    </CardDetails>
                  </Item>
                </Link>
              </Card>
            ))
          ) : (
            <>
              {games.length === 0 ? (
                <Loading>Carregando Aguarde.[*--*].</Loading>
              ) : null}
            </>
          )}
        </CardSimple>
        <br />
        {games.length > 0 ? <Footer /> : null} ||
        {process.env.REACT_APP_BASE_URL === undefined ? (
          <h1> Base Url: NÃO ENCONTRADO A BASE URL </h1>
        ) : (
          <>
            <h1>Base URL: {process.env.REACT_APP_BASE_URL}</h1>
          </>
        )}
      </SimpleBox>
    </>
  );
};
export default Cards;
