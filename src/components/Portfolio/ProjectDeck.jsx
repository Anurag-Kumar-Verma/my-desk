import React from 'react'

const Projectdeck = () => {
    const Project = () => {
        return (
            <section className="project_descr">
                <div className="container mt-100">
                    <div className="row center">
                    <div className="col-md-8 col-md-offset-2 col-sm-12">
                        <div className="section-title">
                            <h2 className="mb-50">project title</h2>
                            <p className="module-subtitle">Latest project we have made. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    </div>

                    <div className="row mt-50">
                        <div className="col-md-9 wow fadeInUp">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="col-md-3 wow fadeInUp" data-wow-delay=".1s">
                            <ul className="project_list">
                                <li>Web design</li>
                                <li>Front end development</li>
                                <li>Back end development</li>
                                <li>SEO</li>
                            </ul>
                            <h5 className="share-title">share</h5>
                            <ul className="social-icons" style={{marginTop:"20px"}}>
                                <li><a href="https://www.facebook.com"><i className="fab fa-facebook    "></i></a></li>
                                <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a></li>
                                <li><a href="https://www.twiiter.com"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="https://www.googleplus.com"><i className="fab fa-google-plus-square"></i></a></li>
                                <li><a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a></li>
                                <li><a href="https://www.pinterest.com"><i className="fab fa-pinterest"></i></a></li>
                                <li><a href="https://www.behance.com"><i className="fab fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="pages_pagination">
                        <a href="portfolio-1.html" className="all"><i className="fas fa-bars"></i></a>
                        <a href="/" className="prev"><i className="fas fa-arrow-left"></i></a>
                        <a href="/" className="prev"><i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </section>
        )
    }

    const Facts = () => {
        return (
            <div id="facts" className="facts mt-100 mbr-box mbr-section mbr-section--relative">
                <div className="container">
                    <div className="row center">
                        <div className="col-md-8 col-md-offset-2"><h2 className="mb-100">Fun facts about this project</h2></div>
                    </div>
                    
                    <div className="row text-center">
                        <div className="col-xs-12 col-lg-3 col-md-3">
                            <div className="count-item">
                                <i className="lnr lnr-clock"></i>
                                <i className="fas fa-clock"></i>
                                <div className="numscroller" data-slno='1' data-min='0' data-max='4444' data-delay='10' data-increment="10">9909</div>
                                <div className="count-name-intro">Hours</div>
                            </div>
                        </div>
                        <div className="col-xs-12  col-lg-3 col-md-3">
                            <div className="count-item">
                                <i className="lnr lnr-rocket"></i>
                                <i className="fas fa-rocket"></i>
                                <div className="numscroller" data-slno='1' data-min='0' data-max='1111' data-delay='10' data-increment="5">1111</div>
                                <div className="count-name-intro">Projects</div>
                            </div>
                        </div>
                        <div className="col-xs-12  col-lg-3 col-md-3">
                            <div className="count-item">
                                <i className="lnr lnr-coffee-cup"></i>
                                <i className="fas fa-coffee"></i>
                                <div className="numscroller" data-slno='1' data-min='0' data-max='1555' data-delay='10' data-increment="5">1555</div>
                                <div className="count-name-intro">coffe's</div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-3 col-md-3">
                            <div className="count-item">
                                <i className="lnr lnr-camera"></i>
                                <i className="fas fa-camera-retro"></i>
                                <div className="numscroller" data-slno='1' data-min='0' data-max='4444' data-delay='10' data-increment="10">4444</div>
                                <div className="count-name-intro">Photos taken</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Project />
            <div className="container">
                <div className="fluidImage">
                    <img src="./assets/about.png" alt="" />
                </div>
            </div>
            <Facts />
        </div>
    )
}

export default Projectdeck
