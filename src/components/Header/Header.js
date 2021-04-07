import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App.js';


const Header = () => {
    const [logInUser, setLogInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light mt-5 ">
        <div className="container-fluid">
            <Link className = "nav-link text-danger text-uppercase fs-2 fw-bold" to ="/home">book region</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto pe-3">
                    <li className="nav-item pe-3">
                        <Link className = "nav-link fs-5" to ="/home">Home</Link>
                    </li>
                    <li className="nav-item pe-3">
                        <Link className = "nav-link fs-5" to ="Order">Orders</Link>
                    </li>
                    <li className="nav-item pe-3">
                        <Link className = "nav-link fs-5" to="/add">Admin</Link>
                    </li>
                    <li className="nav-item pe-3">
                        <Link className = "nav-link fs-5" to="/home">Deals</Link>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn btn-outline-danger "><Link className = "nav-link" to="/login">Login</Link></button>
                    </li>
                    <li>
                    {logInUser.displayName ? (
                                    <h5 className='nav-link active text-center text-dark'>
                                        {logInUser.displayName && <img className = " avatar rounded-circle img-fluid width w-50 " src={logInUser.photoURL} alt = ""/>}
                                    </h5>
                            ) : (
                                    <Link to='/login' className='nav-link active text-white text-center'>
                                        Login
                                    </Link>
                            )}
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
};
export default Header;