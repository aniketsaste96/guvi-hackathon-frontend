import "./admininsert.css";
import AdminHome from "./AdminHome";
import { useHistory, useLocation, Link } from "react-router-dom";

const AdminInsert = () => {
  const history = useHistory();
  return (
    <>
      <AdminHome />
      <div>
        <div className="admininsert">
          <div
            className="admins3"
            onClick={() => history.push("/TotalBookings")}
          >
            COLLECTION
          </div>
          <div className="admins4" onClick={() => history.push("/Feedbacks")}>
            FEEDBACK
          </div>
          <div className="admins1">ADD THEATERS</div>
          <div className="admins2">ASSIGNED FILMS</div>
        </div>
      </div>
    </>
  );
};

export default AdminInsert;
