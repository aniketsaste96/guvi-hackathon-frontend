import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import "./movies.css";
export function Details() {
  const history = useHistory();
  const [movie, setMovie] = useState([]);

  const { id } = useParams(); //to get the id

  //fetch movie by id
  let getMovie = () => {
    fetch(`https://61c412cff1af4a0017d9927b.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  };
  useEffect(getMovie, [id]);
  // var movie = movies[id];

  return (
    //Get the value from URL
    //here use new hook called useParams-get the value from URL and to give it ot componant.
    <div className="details-movie">
      <h1>🎥{movie.name}</h1>
      {
        <iframe
          width="80%"
          height="500"
          src={movie.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      }

      <h3>Ratings 💕{movie.rating}</h3>
      <h3>
        <i>{movie.summary}</i>
      </h3>
      <button
        className="btn btn-success  btn-space"
        onClick={() => history.goBack("/Shows")}
      >
        Go Back
      </button>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/Theater")}
      >
        Book Now
      </button>
    </div>
  );
}
