import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

const SideNav = () => {
    return (
        <div className="sidenav">
            <h3 className = "text-warning text-uppercase">BOOK PARADISE</h3>
               <nav className="navbar navbar-expand-lg navbar-light">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav nav flex-column">
                            <Link className="nav-link active text-white  " aria-current="page" to ="/manage">Manage Books</Link>
                            <Link className="nav-link text-white " to ="/add">Add Book</Link>
                            <Link className="nav-link text-white " to ="/customize">Edit Book</Link>
                        </div>
                    </div>
                </nav> 
         </div>    
    );
};
export default SideNav;