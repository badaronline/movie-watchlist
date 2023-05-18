import React, { createContext, useState, useEffect } from "react";

export const MyMovieContext = createContext([]);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const toggleFavorite = (id) => {
    let favoritesArray = JSON.parse(localStorage.getItem("favorites")) || [];
    favoritesArray = favoritesArray.map(Number);

    if (favoritesArray.includes(id)) {
      // Remove id if it already exists in favorites
      favoritesArray = favoritesArray.filter((favoriteId) => favoriteId !== id);
    } else {
      // Add id to favorites if it doesn't exist
      favoritesArray.push(id);
    }

    setFavorites(favoritesArray);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <MyMovieContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </MyMovieContext.Provider>
  );
};
