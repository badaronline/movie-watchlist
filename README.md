# MyMovies Watchlist React App

The Movie Watchlist App is a React-based application that allows users to browse and search for their favorite movies, create a personalized watchlist, and discover detailed information about each movie.
This project was an assignment and bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The app fetch data [TDMB] [(https://www.themoviedb.org/)].

## File Structure
The main files in the React app are organized as follows:
- index.js
- index.css
- App.js
  - components
    - Home.js
    - Watchlist.js
    - MovieDetails.js
  - context
    - FavoriteMovies.js
* index.js: The entry point of the application where the React app is rendered to the DOM.
* index.css: The CSS file for the root component.
* App.js: The main component that acts as a router and contains the routes for different pages.
* components: A directory containing reusable components used in the app.
    * Home.js: A component representing the home page of the app, displaying a list of movies.
    * Watchlist.js: A component representing the watchlist page, displaying saved movies.
    * MovieDetails.js: A component representing the movie details page, showing details of a specific movie.
* context: A directory containing the React context for managing favorite movies.
    * FavoriteMovies.js: A context provider component for managing favorite movies.

## Must-Have Features

- [x] Responsive app
- [x] Using an API to fetch data
- [x] Home Page: The home page displays a list of movies fetched from an API. It allows users to search for movies by keyword and filter movies by genre.
- [x] Movie Details: The movie details page shows detailed information about a specific movie, including its title, genre, runtime, release date, and description. It also provides an option to add or remove the movie from the watchlist.
- [x] Watchlist: The watchlist page displays a collection of movies that the user has added to their watchlist. It allows users to view their saved movies and remove movies from the watchlist.

## Nice-to-Have Features
- [x] Movie Trailer: Show a trailer for each movie on the movie details page if available.
- [] User Ratings and Reviews: Allow users to rate and write reviews for movies. Display average ratings and reviews on the movie details page.
- [] Sorting and Filtering: Add options to sort movies by popularity, release date, or ratings. Allow users to filter movies by different criteria.

## Getting Started
To run the React app locally, follow these steps:

1. Clone the repository.
2. Install dependencies by running npm install.
3. Start the development server with npm start.
4. Open the app in your browser at http://localhost:3000.

