import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import './SideNav.css';

const SideNav = () => {
    return (
        <div className="sidenav">
            <h3 className = "text-warning text-uppercase d-flex justify-content-center align-items-center">BOOK region</h3>
               <nav className="navbar navbar-expand-lg navbar-light">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav nav flex-column ">
                            <Link className="nav-link active text-white  " aria-current="page" to ="/manage"><FontAwesomeIcon icon={faThLarge} color="lime"  />Manage Books</Link>
                            <Link className="nav-link text-white " to ="/add"><FontAwesomeIcon icon={faPlus} />Add Book</Link>
                            <Link className="nav-link text-white " to ="/customize"><FontAwesomeIcon icon={faEdit} color="lime" />Edit Book</Link>
                        </div>
                    </div>
                </nav> 
         </div>    
    );
};
export default SideNav;