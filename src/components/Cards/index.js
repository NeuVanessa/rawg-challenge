import React, { useState, useEffect } from "react";
import {
  CardSimple,
  Card,
  SimpleBox,
  Image,
  CardDetails,
  Title,
  Description,
} from "./styles.js";
import api from "../../services/api";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  // padding: theme.spacing(8),
  // textAlign: 'center',
  // color: theme.palette.text.secondary,
}));

export const Cards = () => {

  const [games, setGames] = useState([]);
  const fetchGames = async () => {
    const { data } = await api.get(
      `games?`
    );
    console.log(data.results);
    setGames(data.results);
  };

  useEffect(() => {
    fetchGames();
  }, []);


  return (
    <>
      <SimpleBox >
        <CardSimple container spacing={2} columns={16}>
          {games.length > 0 ? (
            games.map((game) => (
              <Card item xs={6} key={game.id}>
                <Link key={game.id}
                  to={{
                    pathname: `/game/${game.id}`,
                    gameProps: {
                      game: game,
                    },
                  }}>
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
              <h1>Carregando...</h1>
            </>
          )}
        </CardSimple>
      </SimpleBox>
    </>
  );
};
export default Cards;
