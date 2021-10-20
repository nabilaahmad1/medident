import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import logo from '../../../images/tooth.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* company logo and name  */}
                <div className="navbar-brand fs-2 title px-5 ">
                    <img src={logo} alt="website-logo" width="50" height="50" className="d-inline-block align-text-top me-3" />
                    MediDent
                </div>
                {/* tab and phone menu tab  */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* navbar links to different pages  */}
                <div className="collapse navbar-collapse navbar-align px-5" id="navbarNavAltMarkup">
                    <div className="navbar-nav px-5">
                        <NavLink className="nav-link active " aria-current="page" to="/home">Home</NavLink>
                        <NavLink className="nav-link " to="/about">About</NavLink>
                        <NavLink className="nav-link " to="/services">Services</NavLink>
                        <NavLink className="nav-link " to="/doctors">Doctors</NavLink>
                        <NavLink className="nav-link " to="/appointment">Appointment</NavLink>
                        {user?.email ?
                            <button onClick={logOut} type="button" className="btn btn-primary rounded-pill px-3 me-3">Log Out</button> :
                            <NavLink className="nav-link" to="/login">login</NavLink>
                        }
                        <span className="navbar-text">
                            User <a href="#login">{user?.displayName}</a>
                        </span>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Header;