import React from "react";
import { Link, useHistory } from "react-router-dom";

const CardDetail = (props) => {
  const history = useHistory();
  const { game } = props.location.gameProps;
  let ScreenshotData = game.short_screenshots.map((ss) => (
    <div>
      <img src={ss.image} alt="screenshot" />
    </div>
  ));

  return (
    <div>
      <h1>{game.name}</h1>
      <p>Released: {game.released}</p>
      <p>Rating: {game.rating}</p>
      <h3>Genres:</h3>
      {game.genres.map((g) => `${g.name} | `)}
      <h3>Platforms:</h3>
      {game.platforms.map((p) => `${p.platform.name} | `)}
      <div>{ScreenshotData}</div>
      <button>
        <Link onClick={() => history.push("/")}>

        </Link>
      </button>
    </div>
  );
};

export default CardDetail;
