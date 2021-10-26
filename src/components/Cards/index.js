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
  const [game, setGame] = useState({});
  const isGames = async (id) => {
    const response = await api.get(`games?${id}`);
    setGames(response.data.results);
  };

  useEffect(() => {
    isGames();
    setGame();
    //console.log(games)
  }, [games]);

  return (
    <>
      <SimpleBox game={game}>
        <CardSimple container spacing={2} columns={16}>
          {games.length > 0 ? (
            games.map((data) => (
              <Card item xs={6} key={data.id}>
                <Link to={`games/${data.id}`}>
                  <Image
                    component="img"
                    image={data.background_image}
                    alt={data.name}
                  />
                  <Item key={data.id}>
                    <CardDetails align="left">
                      <Title> {data.name}</Title>
                      <Description>{data.released} </Description>
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
