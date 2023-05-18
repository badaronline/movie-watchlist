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
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fav" element={<Watchlist />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
          </Routes>
        </FavoritesProvider>
      </div>
    </Router>
  );
};

export default App;
