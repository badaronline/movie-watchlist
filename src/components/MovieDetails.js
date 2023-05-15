import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { MyMovieContext } from "../context/FavoriteMovies";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [trailer, setTrailer] = useState(false);
  const [trailerLink, setTrailerLink] = useState("");

  const { favorites, toggleFavorite } = useContext(MyMovieContext);
  const isFavorite = favorites.includes(parseInt(id));
  const [added, setAdded] = useState(isFavorite);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    const fetchTrailer = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`
        );
        const data = await response.json();
        const trailer = data.results.find((video) => video.type === "Trailer");
        if (trailer) {
          // construct URL for trailer on YouTube
          const trailerUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
          setTrailerLink(trailerUrl);
          setTrailer(true);
        }
      } catch (error) {
        console.error("Error fetching movie videos:", error);
      }
    };
    fetchMovieDetails();
    fetchTrailer();
  }, [id]);

  const getPosterURL = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterpath}`;
  };

  const handleClick = (e) => {
    const movieId = parseInt(e.target.getAttribute("data-id"));
    toggleFavorite(movieId);
    setAdded((prev) => !prev);
  };

  // If movie not found, show error message
  if (!movie) {
    return <div>Error: Movie not found</div>;
  }

  return (
    <>
      <div className="header">
        <div className="top">
          <Link to="/" className="top-link">
            <p>MyMovies</p>
          </Link>

          <Link className="top-link" to="/fav">
            <p>
              My Watchlist <span>{favorites ? favorites.length : 0}</span>
            </p>
          </Link>
        </div>
      </div>
      <div className="detail-page--container">
        <div className="movie--detail">
          <Link to={`/movies/${movie.id}`}>
            <img src={getPosterURL(movie.poster_path)} alt={movie.title} />
          </Link>

          <div className="detail-page--details">
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genres?.map((item) => item.name + " ")}</p>
            <p>Runtime: {movie.runtime} minutes</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Description: {movie.overview}</p>
            <div className="button--container">
              <button onClick={handleClick} data-id={movie.id}>
                {added ? "Delete movie" : "Add movie"}
              </button>
              {trailer && (
                <a href={trailerLink} target="_blank" rel="noreferrer">
                  <button>Watch trailer</button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
