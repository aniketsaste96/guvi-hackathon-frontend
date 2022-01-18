import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

import InfoIcon from "@mui/icons-material/Info";
import Card from "@mui/material/Card";
import { Counter } from "./Counter";

export function Movie({
  name,
  poster,
  rating,
  summary,
  deleteButton,
  id,
  editButton,
}) {
  //conditional styling
  const style =
    rating >= 8.5
      ? {
          color: "green",
        }
      : {
          color: "red",
        };
  //Conditional styeling
  // const [show, setShow] = useState(true);
  // const description = {display: show ? "block" : "none" }
  const [show, setShow] = useState(true);
  const history = useHistory();

  return (
    <Card elevation={24} className="container">
      <img className="movie-poster" alt={name} src={poster}></img>
      <div className="movie-specs">
        <h3 className="movie-name">{name} </h3>{" "}
        <Link onClick={() => history.push(`/movies/${id}`)}>
          <InfoIcon />
        </Link>
        <p className="movie-rating" style={style}>
          ⭐<span>{rating}</span>{" "}
        </p>
        <Counter />
      </div>

      {/* <Button onClick={() => history.push(`/edit/${id}`)} variant="outlined" disableElevation>
                Edit
            </Button> */}
      <Button
        onClick={() => setShow(!show)}
        variant="contained"
        disableElevation
      >
        Summary
      </Button>

      {/* {conditional rendering} */}
      {show ? <p className="summary">{summary}</p> : ""}
      <div id="bottom">
        {deleteButton}
        {editButton}
      </div>
    </Card>
  );
}
