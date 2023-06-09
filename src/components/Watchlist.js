import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MyMovieContext } from "../context/FavoriteMovies";

const Watchlist = () => {
  const { favorites, toggleFavorite } = useContext(MyMovieContext);
  const [myMovies, setMyMovies] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const API_URL = "https://api.themoviedb.org/3/movie/";
    // Fetch movies details for each ID in savedArray
    const fetchMovies = async () => {
      const movieDetails = await Promise.all(
        favorites.map(async (id) => {
          const response = await fetch(`${API_URL}${id}?api_key=${apiKey}`);
          const data = await response.json();
          return data;
        })
      );
      setMyMovies(movieDetails);
    };

    fetchMovies();
  }, [favorites]);

  const renderMovieCards = () => {
    if (favorites.length === 0) {
      return (
        <p className="empty--list">
          You have no movies added to your watchlist yet{" "}
          <Link to="/" className="empty--link">
            Add movies
          </Link>
        </p>
      );
    }

    return myMovies.map((item) => (
      <div className="movie-card" key={item.id}>
        <Link to={`/movies/${item.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.title}
          />
        </Link>

        <div className="movie-details">
          <p className="movie-title">{item.title}</p>
          <button
            className="movie--details--button"
            onClick={() => toggleFavorite(item.id)}
          >
            Delete movie
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="watchlist">
      <div className="top">
        <Link to="/" className="top-link">
          <p>MyMovies</p>
        </Link>
      </div>
      <div className="watchlist--section">
        <p className="my--movies">Added Movies</p>
        <div className="container">{renderMovieCards()}</div>
      </div>
    </div>
  );
};

export default Watchlist;
