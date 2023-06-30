import React, { useEffect, useState } from 'react';
import './App.css';
import { getMovieList, searchMovie, getMovieDetails } from './api';
import logo from './assets/star.png';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    if (!popularMovies) {
      return null; // Return null or a loading indicator while data is being fetched
    }

    return popularMovies.map((movie, i) => (
      <div className="Movie-wrapper" key={i}>
        <a href={`https://www.themoviedb.org/movie/${movie.id}`}>
          <img
            className="Movie-image"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            alt={movie.title}
          />
        </a>
        <a href={`https://www.themoviedb.org/movie/${movie.id}`}>
        <div className="Movie-title">{movie.title} ({movie.release_date.substring(0, 4)})</div></a>
        <div className="Movie-date">{movie.release_date.substring(0, 4)}</div>
        <div className="Movie-rate">
          <img className="Logo-icon" src={logo} alt='logo' />
          {movie.vote_average}
        </div>
      </div>
    ));
  };

  const search = async (q) => {
    try {
      const results = await searchMovie(q);
      setSearchResults(results);
    } catch (error) {
      console.error("Error searching movies:", error);
      setSearchResults([]);
    }
  };

  const MovieList = ({ movies }) => {
    return (
      <div className="Movie-list">
        <div className="Movie-results">
          {movies.map((movie, i) => (
            <div className="Movie-wrapper" key={i}>
               <a href={`https://www.themoviedb.org/movie/${movie.id}`}>
                <img
                  className="Movie-image"
                  src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
                  alt={movie.title}
                />
              </a>
              <a href={`https://www.themoviedb.org/movie/${movie.id}`}>
              <div className="Movie-title">{movie.title} ({movie.release_date.substring(0, 4)})</div></a>
              <div className="Movie-date">{movie.release_date.substring(0, 4)}</div>
              <div className="Movie-rate">
                <img className="Logo-icon" src={logo} alt='logo' />
                {movie.vote_average}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Logo-search-container">
          <input
            placeholder="Find your favorite movies.."
            className="Movie-search"
            onChange={({ target }) => search(target.value)}
          />
          <h1 className="App-logo">GOOSEFLIX</h1>
        </div>
      </header>
      <div className="Movie-container">
        {searchResults.length > 0 ? (
          <MovieList movies={searchResults} />
        ) : (
          <PopularMovieList />
        )}
      </div>
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} Yozakha Kirnanta. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
