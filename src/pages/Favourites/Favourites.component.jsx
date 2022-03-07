import React, { useEffect, useMemo, useState } from "react";
import ReactECharts from "echarts-for-react";
import List from "../../components/List";
import Movie from "../../components/Movie";
import { Loader } from "../Movies/Movies.style";
import { getFavourites, removeFromFavourites } from "./Favourites.service";
import { BoldCenterText } from "./Favourites.style";

const Favourites = () => {
  const [favouriteMovies, setFavouriteMovies] = useState();
  const options = useMemo(() => {
    if (favouriteMovies) {
      const distinctYears = [
        ...new Set(favouriteMovies.map((movie) => movie.Year)),
      ].sort((a, b) => a - b);
      const yearsCount = [];
      for (const year of distinctYears) {
        yearsCount.push(
          favouriteMovies.filter((movie) => movie.Year === year).length
        );
      }
      return {
        title: { text: "Favourite movies per year", left: "center" },
        xAxis: {
          name: "Year",
          type: "category",
          data: distinctYears,
        },
        yAxis: { name: "Counts" },
        series: [
          {
            data: yearsCount,
            type: "bar",
          },
        ],
      };
    }
  }, [favouriteMovies]);

  useEffect(() => {
    const storedFavourites = getFavourites();

    setFavouriteMovies(storedFavourites);
  }, []);

  if (!favouriteMovies) return <Loader />;

  if (favouriteMovies.length === 0)
    return (
      <BoldCenterText>Browse movie and add your favourites!</BoldCenterText>
    );

  return (
    <>
      <ReactECharts option={options} />
      <List>
        {favouriteMovies.map((movie) => (
          <Movie movie={movie} removeFromFavourites={removeFromFavourites} />
        ))}
      </List>
    </>
  );
};

export default Favourites;
