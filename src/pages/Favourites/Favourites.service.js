const favourtiesLocalStorageKey = "favourite-movies";

export const getFavourites = () => {
  const favourties = JSON.parse(
    localStorage.getItem(favourtiesLocalStorageKey)
  );

  if (!favourties) return [];
  return favourties;
};

export const addToFavourites = (movie) => {
  const favourties = getFavourites();
  const newFavourties = favourties ? [...favourties, movie] : [movie];

  localStorage.setItem(
    favourtiesLocalStorageKey,
    JSON.stringify(newFavourties)
  );
};

export const removeFromFavourites = (movie) => {
  const favourties = getFavourites();
  if (favourties) {
    localStorage.setItem(
      favourtiesLocalStorageKey,
      JSON.stringify(
        favourties.filter((favourite) => favourite.imdbID !== movie.imdbID)
      )
    );
    window.location.reload();
  }
};
