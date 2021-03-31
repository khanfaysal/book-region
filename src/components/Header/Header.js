import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light mb-5 ">
        <div className="container-fluid">
            <Link to ="/home">BOOK PARADISE</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to ="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to ="/shop">Orders</Link>
                </li>
                <li className="nav-item">
                    <Link to="">Admin</Link>
                </li>
                <li className="nav-item">
                    <Link to="">Deals</Link>
                </li>
                <li className="nav-item">
                    <button type="button" class="btn btn-primary"><Link to="/login">Login</Link></button>
                </li>
               
                
            </ul>
            </div>
        </div>
</nav>
    );
};

export default Header;