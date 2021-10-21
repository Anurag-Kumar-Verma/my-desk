import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="100" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="svgcolor-light">
                <path d="M0 0 L50 100 L100 0 Z" fill="#fff" stroke="#fff"></path>
            </svg>
            <div className="container">
                <div className="row mt-100 mb-50 footer-widgets">
                   
                    <div className="col-md-6 col-xs-12">
                        <div className="footer-widget contact-widget">
                            <img src="./assets/footerlogo.png" className="logo-footer img-responsive" alt="Footer Logo" />
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            <ul className="social-icons">
                                <li>
                                    <a className="facebook" href="/">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="twitter" href="/"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a className="google" href="/"><i className="fab fa-google-plus"></i></a>
                                </li>
                                <li>
                                    <a className="dribbble" href="/"><i className="fab fa-dribbble"></i></a>
                                </li>
                                <li>
                                    <a className="linkdin" href="/"><i className="fab fa-linkedin"></i></a>
                                </li>
                                <li>
                                    <a className="flickr" href="/"><i className="fab fa-flickr"></i></a>
                                </li>
                                <li>
                                    <a className="tumblr" href="/"><i className="fab fa-tumblr"></i></a>
                                </li>
                                <li>
                                    <a className="instgram" href="/"><i className="fab fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a className="vimeo" href="/"><i className="fab fa-vimeo-square"></i></a>
                                </li>
                                <li>
                                    <a className="skype" href="/"><i className="fab fa-skype"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-xs-12">
                        <div className="footer-widget twitter-widget">
                            <h4>Twitter</h4>
                            Email: somecompany@example.com <br />
                            Phone: +1 234 567 89 10
                        </div>
                    </div>
                    <div className="col-md-3 col-xs-12">
                        <div className="footer-widget company-links">
                            <h4>Company</h4>
                            <ul className="footer-links">
                                <li><a href="/">About</a></li>
                                <li><a href="/">Services</a></li>
                                <li><a href="/">Our Products</a></li>
                                <li><a href="/">Our Culture</a></li>
                                <li><a href="/">Team</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright-section">
                    <div className="row">
                        <div className="col-md-6">
                            <p>&copy; 2021 Karmo -  All Rights Reserved <a href="/">Tanislav Robert</a> </p>
                        </div>
                    </div>
                </div>
            
            </div>
        </footer>
    )
}

export default Footer