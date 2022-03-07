import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import api from "../../api";
import { getQueryParams } from "../../api/utils";
import {
  MovieContainer,
  TitleContainer,
  Poster,
  Plot,
  CommentContainer,
  Comment,
} from "./MovieDetails.style";
import { Loader } from "../Movies/Movies.style";
import Rate from "../../components/Rate";
import { formatRating } from "../../utils/rating";

const MovieDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [movie, setMovie] = useState();

  useEffect(
    () =>
      api.get("", { params: getQueryParams({ id }) }).then(({ data }) => {
        if (data.Error) {
          navigate("/");
        } else {
          setMovie(data);
        }
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id]
  );

  if (!movie) return <Loader />;

  return (
    <MovieContainer
      container
      spacing={5}
      alignItems="center"
      direction="column"
    >
      <TitleContainer item>{movie.Title}</TitleContainer>
      <Grid item>
        <Poster src={movie.Poster} alt={movie.Title + " poster"} />
      </Grid>
      <Plot item>{movie.Plot}</Plot>
      <Grid item>
        <Rate value={formatRating(movie.imdbRating)} />
        <CommentContainer>
          <Comment>Comment</Comment>
          <TextareaAutosize
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            minRows={3}
          />
        </CommentContainer>
      </Grid>
      <Button onClick={() => console.log(comment)}>Submit</Button>
    </MovieContainer>
  );
};

export default MovieDetails;
