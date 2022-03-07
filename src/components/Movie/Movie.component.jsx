import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../Routes";

const Movie = ({
  movie,
  addToFavourites,
  isFavourite,
  removeFromFavourites,
}) => {
  const navigate = useNavigate();
  const onMoreClick = (id) => navigate(ROUTES.MovieDetails.replace(":id", id));
  const onFavouritesClick = addToFavourites
    ? addToFavourites
    : removeFromFavourites;
  const { imdbID, Title, Poster, Plot } = movie;

  return (
    <Card sx={{ maxWidth: "20vw" }}>
      <CardMedia
        component="img"
        height="140"
        image={Poster}
        alt={Title + " poster"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Plot}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onMoreClick(imdbID)}>
          More
        </Button>
        <Button
          size="small"
          disabled={addToFavourites && isFavourite}
          onClick={() => onFavouritesClick(movie)}
        >
          {addToFavourites
            ? isFavourite
              ? "Added"
              : "Add to favourites"
            : "Remove"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Movie;
