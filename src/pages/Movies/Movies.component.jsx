import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import List from "../../components/List";
import { WelcomeText, ErrorContainer, Loader } from "./Movies.style";
import Movie from "../../components/Movie";
import { SORT_OPTIONS, sortMovies } from "./Movies.service";
import api from "../../api";
import { getQueryParams } from "../../api/utils";
import {
  addToFavourites,
  getFavourites,
} from "../Favourites/Favourites.service";

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState();

  useEffect(() => {
    const storedFavourites = getFavourites();
    setFavourites(storedFavourites.map((favourite) => favourite.imdbID));
  }, []);

  const onSearch = (searchValue, sortValue) => {
    setLoading(true);
    api
      .get("", {
        params: getQueryParams({ title: searchValue }),
      })
      .then(({ data }) => {
        if (data.Error) {
          setError(data.Error);
        }
        if (data.Search) {
          setMovies(sortMovies(data.Search, sortValue));
          setError("");
        }
        setLoading(false);
      });
  };

  const renderMovies = () => {
    if (movies.length === 0)
      return <WelcomeText>Welcome, try searching for a movie!</WelcomeText>;
    return (
      <List>
        {movies.map((movie) => (
          <Movie
            movie={movie}
            isFavourite={favourites && favourites.includes(movie.imdbID)}
            addToFavourites={() => {
              addToFavourites(movie);
              setFavourites([...favourites, movie.imdbID]);
            }}
          />
        ))}
      </List>
    );
  };

  if (loading) return <Loader />;

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Filter onSearch={onSearch} sortOptions={SORT_OPTIONS} />
      </Grid>
      <Grid item>
        {error ? <ErrorContainer>{error}</ErrorContainer> : renderMovies()}
      </Grid>
    </Grid>
  );
};

export default Movies;
