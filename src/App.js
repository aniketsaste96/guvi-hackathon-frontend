import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Signup from './componants/Signup'
import Login from './componants/Login'
import BookMovies from './Myshow/BookMovies'
import { Navbar } from './Navbar'
import Slider from './Slider'
import { Details } from './Myshow/Details'
function App() {
  const user = localStorage.getItem("token");
  return (
    <>

      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Slider />
            <BookMovies />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Signup">
            <Signup />
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
        </Switch>
      </Router>

    </>
  );
}

export default App;

{/* <Router>       
        
{user && <Route path='/' exact element={<Main />} />}
<Route path='/signup' exact element={<Signup />} />
<Route path='/Login' exact element={<Login />} />
<Route path='/' exact element={<Navigate replace to="/Login" />} />
</Router> */}














