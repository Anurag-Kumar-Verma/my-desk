/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="main-header">
            <div className="container-fluid">
                <div className="navbar">
                    <div className="logo">
                        <a href="/">
                            <img src="./assets/logo.png" width="80" alt="" />
                        </a>
                    </div>

                    <div className="navMenu2">
                        <ul className="menu">
                            <li>
                                <Link className="link-item" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="link-item" to="/services">Services</Link>
                            </li>
                            <li>
                                <Link className="link-item" to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link className="link-item" to="/project">Single Project</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="box-header">
                    <div className="box-logo">
                        <a href="index.html"><img src="./assets/logo.png" width="80" alt="Logo" /></a>
                        <button className="box-primary-nav-trigger" id="openMenu">
                            <i className="fas fa-bars"></i>
						</button>

                        <nav id="navMenu">
                            <ul className="box-primary-nav">
                                <li className="box-label">KARMO</li>

                                <li><Link className="link-item" to="/">Home</Link> </li>
                                <li><Link className="link-item" to="/services">Services</Link> </li>
                                <li><Link className="link-item" to="/project">Single Project</Link> </li>
                                <li><Link className="link-item" to="/contact">Contact</Link> </li>

                                <li className="box-label">SOCIAL</li>

                                <li><a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a></li>
                                <li><a href="https://www.twiiter.com"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a></li>

                            </ul>
                        </nav>
                    </div>
                </div> */}

                <section className="box-intro bg-film">
                    <div className="table-cell">

                        <h3 className="box-headline letters rotate-2">
                            <span className="box-words-wrapper" style={{width: "286px"}}>
                                <b className="is-visible">CLEAN &nbsp;&amp;&nbsp; CREATIVE.</b>
                                <b style={{opacity: "0"}}>&nbsp;SIMPLE &nbsp;&amp;&nbsp; POWERFUL.</b>
                            </span>
                        </h3>
                        <h1>WE ARE KARMO</h1>

                    </div>

                    <div className="mouse">
                        <div className="scroll"></div>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Header
