import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import Slider from "./Slider";
import Signup from "./componants/Signup";
// import Login from './componants/Login'
import AdminInsert from "./Admin/AdminInsert";
import { Navbar } from "./Navbar";
import BookMovies from "./Myshow/BookMovies";
import { Details } from "./Myshow/Details";
import Login from "./SecondaryC/Login/Login";
import HomePage from "./SecondaryC/Homepage/HomePage";
import Register from "./SecondaryC/Register/Register";
import Theater from "./Admin/Theater";
import AdminHome from "./Admin/AdminHome";
import FeedbackPage from "./Pages/FeedbackPage";
import { Feedbacks } from "./Admin/Feedbacks";
import { TotalBookings } from "./Admin/TotalBookings";

function App() {
  // const user = localStorage.getItem("token");
  const [user, setLoginUser] = useState({});

  return (
    <div div className="App">
      {/* <Feedbacks /> */}
      {/* <AdminHome /> */}
      {/* <FeedbackPage /> */}
      {/* <AdminHome /> */}
      {/* <Theater /> */}
      {/* {user && user._id ? (
              <>  </>
            ) : ( */}

      {/* {user && user._id ? (
              <>
                <Theater />
              </>
            ) : (
              <Login setLoginUser={setLoginUser} />
            )} */}

      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar setLoginUser={setLoginUser} />
            <Slider />
            <BookMovies />
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/Shows">
            <Signup />
          </Route>
          <Route exact path="/Booking">
            <Signup />
          </Route>
          <Route exact path="/Details/:id">
            <Details />
          </Route>
          <Route exact path="/trending">
            <BookMovies />
          </Route>
          <Route exact path="/theater">
            <Theater />
          </Route>
          <Route exact path="/user/feedback">
            <Feedbacks />
          </Route>
          <Route exact path="/admin/feedback">
            <Feedbacks />
          </Route>
          <Route exact path="/AdminHome">
            <AdminHome />
          </Route>
          <Route exact path="/AdminInsert">
            <AdminInsert />
          </Route>
          <Route exact path="/TotalBookings">
            <TotalBookings />
          </Route>
          <Route exact path="/Feedbacks">
            <Feedbacks />
          </Route>
          <Route exact path="/FeedbackPage">
            <FeedbackPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

{
  /* <Router>       
        
{user && <Route path='/' exact element={<Main />} />}
<Route path='/signup' exact element={<Signup />} />
<Route path='/Login' exact element={<Login />} />
<Route path='/' exact element={<Navigate replace to="/Login" />} />
</Router> */
}
