import "./movies.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const BookMovies = () => {
  const [movies, setMovieList] = useState([]);
  const history = useHistory();
  const getMovies = () =>
    fetch("https://61c412cff1af4a0017d9927b.mockapi.io/movies", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  useEffect(getMovies, []);
  return (
    <div className="my-2">
      <h3>Recommended</h3>
      <hr />
      <div className="my-2 movieList">
        <hr />

        {movies.map(({ name, poster, rating, summary, id, trailer }, index) => (
          <div className="movies">
            <div>
              <h3>{name}</h3>
              <img src={poster} alt="" />
            </div>
            <p>💕{rating}</p>

            <button
              className="btn btn-primary btn-space"
              onClick={() => history.push("/Login")}
            >
              Book Now
            </button>
            <button
              className="btn btn-success "
              onClick={() => history.push(`/Details/${id}`)}
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookMovies;
