
import Login from './componants/Login'
import { useHistory, useLocation, Link } from 'react-router-dom'

export const Navbar = ({ setLoginUser }) => {
    const History = useHistory()
    const handlelogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><i class="fas fa-film"></i>Book My Show</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link className="nav-item">
                                <a className="nav-link active" aria-current="page" onClick={() => History.push('./trending')} >Trending</a>
                            </Link>
                            <Link className="nav-item"
                                className="nav-link" onClick={() => History.push('./Login')} >

                                Log In

                            </Link>
                            <Link className="nav-item"
                                className="nav-link" onClick={() => History.push("/AdminInsert")} >

                                Admin

                            </Link>

                            <Link className="nav-item"
                                className="nav-link" onClick={() => History.push("/FeedbackPage")} >

                                FeedBack

                            </Link>
                            <Link className="nav-item"
                                className="nav-link" onClick={() => setLoginUser({})} >

                                Logout

                            </Link>
                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    )
}
