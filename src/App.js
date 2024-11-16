import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API_KEY = "9557d4bc";
const BASE_URL = "https://www.omdbapi.com/";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
const [initialNoresults ,setinitialNoresults] = useState(false)
  useEffect(() => {
    fetchMovies("avengers");
  }, []);

  const fetchMovies = async (query) => {
    
    try {
      const response = await axios.get(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
      setinitialNoresults(true);
      if (response.data.Search) {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
      setinitialNoresults(true)
      setMovies([]);
    }
  };

  const fetchMovieDetails = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
      setSelectedMovie(response.data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const fetchSuggestions = async (query) => {
    try {
      const response = await axios.get(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
      if (response.data.Search) {
        setSuggestions(response.data.Search);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error("Error fetching movie suggestions:", error);
    }
  };


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    fetchSuggestions(e.target.value);
  };


  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchMovies(searchQuery);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Search App</h1>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchQuery}
            onChange={handleSearchChange}
            list="movie-suggestions"
          />
          <button type="submit">Search</button>
          <datalist id="movie-suggestions">
            {suggestions.map((movie) => (
              <option key={movie.imdbID} value={movie.Title} />
            ))}
          </datalist>
        </form>
      </header>

      <div className="movie-list">
        {movies.length > 0  && initialNoresults == false ? (
          movies.map((movie) => (
            <div
              key={movie.imdbID}
              className="movie-item"
              onClick={() => fetchMovieDetails(movie.imdbID)}
            >
              <h2>{movie.Title}</h2>
              <p>{movie.Year}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No Results Found</p>
        )}
      </div>

      {selectedMovie && (
        <div className="movie-modal">
          <div className="modal-content animated-modal">
            <button
              className="close-modal"
              onClick={() => setSelectedMovie(null)}
            >
              X
            </button>
            <h2>{selectedMovie.Title}</h2>
            <p>
              <strong>Genre:</strong> {selectedMovie.Genre}
            </p>
            <p>
              <strong>Plot:</strong> {selectedMovie.Plot}
            </p>
            <p>
              <strong>Rating:</strong> {selectedMovie.imdbRating}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
