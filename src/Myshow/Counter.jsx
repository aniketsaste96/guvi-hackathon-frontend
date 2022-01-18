import Badge from "@mui/material/Badge";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  const incremnetLike = () => {
    setLike(like + 1);
  };
  const decremnetLike = () => {
    setDisLike(dislike + 1);
  };

  useEffect(() => {}, [dislike]);

  return (
    <div className="Badge">
      <Button onClick={incremnetLike}>
        <Badge badgeContent={like} color="primary" size="large">
          <i class="fas fa-thumbs-up"></i>
        </Badge>
      </Button>

      <Button onClick={decremnetLike} color="error">
        <Badge
          size="large"
          color="error"
          variant="outlined"
          badgeContent={dislike}
          color="error"
        >
          <i class="fas fa-thumbs-down"></i>
        </Badge>
      </Button>
    </div>
  );
}
