export const SORT_OPTIONS = ["Year ↑", "Year ↓", "Title ↑", "Title ↓"];

export const sortMovies = (movies, sortBy) => {
  if (sortBy === "Year ↑")
    return movies.sort((movie_1, movie_2) => movie_1.Year - movie_2.Year);
  if (sortBy === "Year ↓")
    return movies.sort((movie_1, movie_2) => movie_2.Year - movie_1.Year);
  if (sortBy === "Title ↑")
    return movies.sort((movie_1, movie_2) =>
      movie_1.Title < movie_2.Title ? -1 : 1
    );
  if (sortBy === "Title ↓")
    return movies.sort((movie_1, movie_2) =>
      movie_2.Title < movie_1.Title ? -1 : 1
    );

  return movies;
};
