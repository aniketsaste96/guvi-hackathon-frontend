import React from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { useState } from "react";
import "./feedback.css";
const FeedbackPage = () => {
  const [feedback, setFeedback] = useState({
    textarea: "",
    rating: "",
  });
  const history = useHistory();
  return (
    <div className="userFeedback">
      <form>
        <h1>Rate Us!!!</h1>
        <input id="bad" name="rating" value="bad" type="radio" />
        <label className="userfeed" for="bad">
          BAD
        </label>
        <br />
        <input id="good" name="rating" value="good" type="radio" />
        <label className="userfeed" for="good">
          GOOD
        </label>
        <br />
        <input id="better" name="rating" value="better" type="radio" />
        <label className="userfeed" for="better">
          BETTER
        </label>
        <br />
      </form>

      <h1>How can we Improve?</h1>

      <textarea name="textarea" id="" cols="60" rows="10"></textarea>
      <br />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button
        type="submit"
        className="btn btn-success mx-3"
        onClick={() => history.push("/")}
      >
        Go back
      </button>
    </div>
  );
};

export default FeedbackPage;
