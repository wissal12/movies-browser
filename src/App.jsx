import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import { ROUTES } from "./Routes";
import NavBar from "./components/NavBar";
import { Page } from "./App.style";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Page>
        <Routes>
          <Route path="/" element={<Navigate replace to={ROUTES.MOVIES} />} />
          <Route path={ROUTES.FAVOURITES} element={<Favourites />} />
          <Route path={`${ROUTES.MOVIES}`} element={<Movies />} />
          <Route path={ROUTES.MovieDetails} element={<MovieDetails />} />
        </Routes>
      </Page>
    </BrowserRouter>
  );
}

export default App;
