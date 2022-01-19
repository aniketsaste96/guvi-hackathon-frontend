import React from 'react'
import './theater.css'
import { Navbar } from '../Navbar'
import { useHistory, Link } from 'react-router-dom'
const Theater = ({ setLoginUser }) => {

    const history = useHistory();

    return (
        <div>
            <Navbar />
            <div className="mainmovie">

                <div className="movie-container">
                    <label >Pick Movie</label>
                    <select name="movie" id="movie">
                        <option value="10">Jai Bhim(Rs 250)</option>
                        <option value="20">Battle Ship (Rs 300)</option>
                        <option value="8">Toy story (Rs 250)</option>
                        <option value="9">Lion King (Rs 500)</option>
                    </select>
                    <br />
                    <br />
                    <label >Number Of Tickets</label>
                    <select name="tickets" id="tickets">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <br />
                    <br />

                    <label >Show Time</label>
                    <select name="tickets" id="tickets">
                        <option value="1">12.10 pm</option>
                        <option value="2">2.00  pm</option>
                        <option value="2">4.00  pm</option>
                        <option value="2">6.00  pm</option>

                    </select>


                </div>
                <ul className="showcase">
                    <li>
                        <div className="seat"> <i class="fas fa-couch"></i></div>
                        <small>N/A</small>
                    </li>
                    <li>
                        <div className="seat selected"> <i class="fas fa-couch"></i></div>
                        <small>Selected</small>
                    </li>
                    <li>
                        <div className="seat occupied"> <i class="fas fa-couch"></i></div>
                        <small>Occupied</small>
                    </li>
                </ul>
                <div className="container">
                    <div className="screen"></div>
                    <div className="movieseats">


                        <div className="row">
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat occupied">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat occupied">  <i class="fas fa-couch"></i></div>
                        </div>
                        <div className="row">
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                        </div>
                        <div className="row">
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat occupied">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                        </div>
                        <div className="row">
                            <div className="seat occupied">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat occupied">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                        </div>
                        <div className="row">
                            <div className="seat occupied">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                        </div>
                        <div className="row">
                            <div className="seat occupied">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                        </div>
                        <div className="row">
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat occupied">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat occupied">  <i class="fas fa-couch"></i></div>
                        </div>
                        <div className="row">
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat occupied">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                        </div>
                        <div className="row">
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat occupied">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                        </div>
                        <div className="row">
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat occupied">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat occupied">  <i class="fas fa-couch"></i></div>
                        </div>
                        <div className="row">
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat">  <i class="fas fa-couch"></i></div>
                            <div className="seat occupied">  <i class="fas fa-couch"></i></div>
                        </div>
                    </div>
                </div>
                <br />
                <p>You have Selected  <span id="count">0</span>
                    Seats For a price of <span id="total">₹0</span>
                </p>
                <a href="https://rzp.io/l/dYsiq1KK5" target="_blank"> <h3> Make Payment</h3>  </a>
                <Link onClick={() => history.push("/")}>Go Back </Link>

            </div>
        </div>
    )
}

export default Theater
