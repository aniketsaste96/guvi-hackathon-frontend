import { Movie } from "./Movies";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export function MovieList() {
  const history = useHistory();

  const [movies, setMovieList] = useState([]);

  //Remounted when route is changed hence useEffect is triggered

  //delete and refresh the list
  const getMovies = () =>
    fetch("https://61c412cff1af4a0017d9927b.mockapi.io/movies", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));

  const deleteMovie = (id) => {
    fetch(`https://61c412cff1af4a0017d9927b.mockapi.io/movies/${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then(() => getMovies());

    //when deleted you have to refresh the list.
  };
  useEffect(getMovies, []);

  return (
    <div>
      <div>
        <div className="movie-list">
          {movies.map(
            ({ name, poster, rating, summary, id, trailer }, index) => (
              <Movie
                key={id}
                deleteButton={
                  <DeleteIcon
                    variant="outlined"
                    color="error"
                    onClick={() => {
                      deleteMovie(id);
                    }}
                  >
                    {" "}
                    Delete
                  </DeleteIcon>
                }
                editButton={
                  <EditIcon
                    id="editIcon"
                    variant="outlined"
                    color="secondary"
                    onClick={() => history.push(`/movie/edit/${id}`)}
                  >
                    {" "}
                    Edit
                  </EditIcon>
                }
                id={id}
                name={name}
                poster={poster}
                rating={rating}
                summary={summary}
                trailer={trailer}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
