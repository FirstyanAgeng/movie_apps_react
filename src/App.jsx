import { useEffect, useState } from "react";
import "./App.css";
import { getMovieList } from "./api";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovie = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div key={i}>
          <div>{movie.title}</div>
          <div>{movie.poster_path}</div>
          <div>{movie.release_date}</div>
          <div>{movie.vote_average}</div>
        </div>
      );
    });
  };

  const search = (q) => {
    console.log({ q });
  };

  console.log({ popularMovies: popularMovies });

  return (
    <div className="App">
      <header className="App-header">
        <h2>Movie Apps</h2>
        <div className="Movie-container">
          <div className="Movie-wrapper">
            <div className="Movie-title"></div>
            <img src="" alt="" className="Movie-image" />
            <div className="Movie-date"></div>
            <div className="Movie-rate"></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
