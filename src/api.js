import axios from "axios";

const baseURL = import.meta.env.VITE_BASEURL;
const apiKey = import.meta.env.VITE_APIKEY;

export const getMovieList = async () => {
  const movie = await axios.get(`${baseURL}/movie/popular?api_key=${apiKey}`);
  console.log({ movieList: movie });
};

export const searchMovie = async (q) => {
  const search = await axios.get(q);
};
