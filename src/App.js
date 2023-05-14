import React from "react";
import Home from "./components/Home";
import Watchlist from "./components/Watchlist";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import { FavoritesProvider } from "./context/FavoriteMovies";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <FavoritesProvider>
                <Home />
              </FavoritesProvider>
            }
          />
          <Route
            path="/fav"
            element={
              <FavoritesProvider>
                <Watchlist />
              </FavoritesProvider>
            }
          />
          <Route
            path="/movies/:id"
            element={
              <FavoritesProvider>
                <MovieDetails />
              </FavoritesProvider>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
