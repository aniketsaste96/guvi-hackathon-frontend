import "./home.css";
import { useHistory, useLocation, Link } from "react-router-dom";

export default function AdminHome() {
  const history = useHistory();
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link
              className="navbar-brand"
              onClick={() => history.push("/AdminInsert")}
            >
              ADMIN HOME
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Create Theater
                  </a>
                </li>
                <Link className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => history.push("/admin/feedback")}
                  >
                    Feedbacks
                  </a>
                </Link>
                <Link className="nav-item">
                  <a className="nav-link" onClick={() => history.push("/")}>
                    Back to Main Page
                  </a>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
