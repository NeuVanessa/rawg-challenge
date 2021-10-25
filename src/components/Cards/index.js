import React, { useState, useEffect } from 'react'
import { Containers, CardSimple, Title, ContentCard,Description, Search } from "./styles.js"
import api from '../../services/api';

const Cards = () => {

    const [games, setGames] = useState([]);
    const apiKey = "key=8d761ba12ebd4836aeafe9e28314d84f";

    const isGames = async () => {
        const response = await api.get(
            `games?${apiKey}&popular`
        );
        setGames(response.data.results);
    };
    useEffect(() => {
        isGames();
    }, []);


    return (

        <Containers  xs={12} sm={12} md={6} lg={6}>

            <div
                style={{
                    flexDirection: 'column',
                    marginLeft: 'auto',
                    display: 'block',
                    marginRight: 'auto',
                    padding: 30,
                }}
            >

                <Title variant="h6">Listando todos os Games Populares</Title>


                <Search>
                    <input
                        placeholder="Pesquise um game popular..."
                    />
                </Search>
                {games.map((data) => {
                    return (
                        <CardSimple elevation={1}>

                            <ContentCard spacing={24}>
                                <Description gutterBottom variant="h5">
                                    {data.name}
                                </Description>

                            </ContentCard>
                        </CardSimple>
                    )
                })}

            </div>
        </Containers>
    )

}
export default Cards;