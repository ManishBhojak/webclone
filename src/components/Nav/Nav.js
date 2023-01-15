import React from 'react'
import 'remixicon/fonts/remixicon.css';
import 'boxicons/css/boxicons.min.css';
import './nav.css'
export default function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg border-bottom">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="bx bx-menu-alt-left"></span>
                    </button>
                    <a className="navbar-brand" href="/"><img src={`/icons/7c6c684.png`} width="128" height="33.22" alt="logo" /></a>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Solutions
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Integrated Fulfilment</a></li>
                                    <li><hr className='dropdown-divider' /></li>
                                    <li><a className="dropdown-item" href="/">Hyperlocal</a></li>
                                    <li><hr className='dropdown-divider' /></li>
                                    <li><a className="dropdown-item" href="/">Transportation</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Our Story</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Become a Driver-Superhero</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="resources nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Resources
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Articles</a></li>
                                    <li><a className="dropdown-item" href="/">Case Studies</a></li>
                                    <li><a className="dropdown-item" href="/">FAQ</a></li>
                                    <li><a href="/" className='dropdown-item'>Blog</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Integrations</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/"><i className="ri-map-pin-5-fill"></i><span>Track</span></a>
                            </li>
                        </ul>
                        
                    </div>
                            <div className="main">
                                <button className="login btn btn-secondary px-6 py-2" type="submit">Login</button>
                                <button className="signUp btn btn-info px-5 py-2">Sign Up for Free</button>
                            </div>
                </div>
            </nav>

        </>
    )
}
