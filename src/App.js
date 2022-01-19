import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react'
import Slider from './Slider'
import './app.css'
import Signup from './componants/Signup'
// import Login from './componants/Login'
import AdminInsert from './Admin/AdminInsert'
import { Navbar } from './Navbar'
import BookMovies from './Myshow/BookMovies'
import { Details } from './Myshow/Details'
import Login from './SecondaryC/Login/Login'
import HomePage from './SecondaryC/Homepage/HomePage'
import Register from './SecondaryC/Register/Register'
import Theater from './Admin/Theater'
import AdminHome from './Admin/AdminHome'
import FeedbackPage from './Pages/FeedbackPage';
import { Feedbacks } from './Admin/Feedbacks';
import { TotalBookings } from './Admin/TotalBookings';





function App() {
  // const user = localStorage.getItem("token");
  const [user, setLoginUser] = useState({})


  return (

    <div div className="App" >
      {/* <Feedbacks /> */}
      {/* <AdminHome /> */}
      {/* <FeedbackPage /> */}
      {/* <AdminHome /> */}
      {/* <Theater /> */}






      <Router>
        <Switch>



          <Route exact path="/">
            {
              user && user._id ? <>
                <Navbar setLoginUser={setLoginUser} />
                <Slider />
                <BookMovies />
              </> : < Login setLoginUser={setLoginUser} />
            }

          </Route>
          <Route path="/login">
            < Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/register">
            < Register />
          </Route>
          <Route exact path="/Shows">


            <Signup />
          </Route>
          <Route exact path="/Booking">
            {
              user && user._id ? <>
                <Signup />
              </> : < Login setLoginUser={setLoginUser} />
            }

          </Route>
          <Route exact path="/Details/:id">
            {
              user && user._id ? <>
                <Details />
              </> : < Login setLoginUser={setLoginUser} />
            }

          </Route>
          <Route exact path="/trending">
            {
              user && user._id ? <>
                <BookMovies />
              </> : < Login setLoginUser={setLoginUser} />
            }

          </Route>
          <Route exact path="/theater">
            {
              user && user._id ? <>
                <Theater />
              </> : < Login setLoginUser={setLoginUser} />
            }

          </Route>
          <Route exact path="/user/feedback">

          </Route>
          <Route exact path="/admin/feedback">
            {
              user && user._id ? <>
                <Feedbacks />
              </> : < Login setLoginUser={setLoginUser} />
            }

          </Route>
          <Route exact path="/AdminHome">
            {
              user && user._id ? <>
                <AdminHome />
              </> : < Login setLoginUser={setLoginUser} />
            }

          </Route>
          <Route exact path="/AdminInsert">
            {
              user && user._id ? <>
                <AdminInsert />
              </> : < Login setLoginUser={setLoginUser} />
            }

          </Route>
          <Route exact path="/TotalBookings">
            <TotalBookings />
          </Route>
          <Route exact path="/Feedbacks">
            <Feedbacks />
          </Route>
          <Route exact path="/FeedbackPage">
            {
              user && user._id ? <>
                <FeedbackPage />
              </> : < Login setLoginUser={setLoginUser} />
            }

          </Route>
        </Switch>
      </Router >

    </div >
  );
}

export default App;

{/* <Router>       
        
{user && <Route path='/' exact element={<Main />} />}
<Route path='/signup' exact element={<Signup />} />
<Route path='/Login' exact element={<Login />} />
<Route path='/' exact element={<Navigate replace to="/Login" />} />
</Router> */}














