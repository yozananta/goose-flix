import axios from "axios"

const baseUrl = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;

export const getMovieList = async () => {
    try {
      const response = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
      const movieList = response.data.results;
      console.log({ movieList });
      return movieList;
    } catch (error) {
      console.error("Error fetching movie list:", error);
      return [];
    }
  };
  

  export const searchMovie = async (q) => {
    try {
      const response = await axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&query=${q}`);
      const searchResults = response.data.results;
      return searchResults;
    } catch (error) {
      console.error("Error searching movies:", error);
      return [];
    }
  };


  export const getMovieDetails = async (movieId) => {
    try {
      const response = await axios.get(`${baseUrl}/movie/${movieId}?api_key=${apiKey}`);
      const movieDetails = response.data;
      console.log({ movieDetails });
      return movieDetails;
    } catch (error) {
      console.error("Error fetching movie details:", error);
      return null;
    }
  };
  


