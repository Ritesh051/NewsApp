import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">NewsAir</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link mx-3" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-3" to="/foryou">For you</NavLink>
                            </li>
                            <li className="line my-2"
                                style={{height: 'auto', border: '1px solid #ccc'}}>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-3" to="/general">General</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-3" to="/business">Business</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-3" to="/entertainment">Entertainment</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-3" to="/health">Health</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-3" to="/science">Science</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-3" to="/sports">Sports</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-3" to="/technology">Technology</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
