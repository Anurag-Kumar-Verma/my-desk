import React from 'react'

const Services = () => {
    const WeDo = () => {
        return(
            <section className="about_descr mt-100">
                <div className="container">
                    <div className="row center">
                        <div className="col-md-8 col-md-offset-2 col-sm-12">
                            <div className="section-title">
                                <h2 className="mb-50">Our services</h2>
                                <p className="module-subtitle">Latest project we have made. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-100">
                        <div className="col-md-6 wow fadeInUp">
                            <p style={{marginBottom: "30px"}}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts, nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur..
                            </p>
                            <div className="col-md-6">
                                <div className="row">
                                    <ul className="services-list">
                                        <li>Stunning on all screens</li>
                                        <li>Easy to customize</li>
                                        <li>Make a difference</li>
                                        <li>Imagine and create</li>
                                        <li>Unlimited possibilities</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <ul className="services-list">
                                        <li>Remarkable style</li>
                                        <li>Captivating presentations</li>
                                        <li>Make a difference</li>
                                        <li>Make a difference</li>
                                        <li>Imagine and create</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 wow fadeInUp">
                            <img src="./assets/img 2.jpg" alt="img" style={{width: "100%"}} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    const Team = () => {
        return (
            <div id="clients" className="clients mt-100 mbr-box mbr-section mbr-section--relative">
                <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="100" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0 L50 100 L100 0 Z" fill="#fff" stroke="#fff"></path>
                </svg>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"></div>

                        <div id="owl-demo">
                            <div className="item"><img src="./assets/clients/2.png" alt="Owl_Image" /></div>
                            <div className="item"><img src="./assets/clients/3.png" alt="Owl_Image" /></div>
                            <div className="item"><img src="./assets/clients/1.png" alt="Owl_Image" /></div>
                            <div className="item"><img src="./assets/clients/2.png" alt="Owl_Image" /></div>
                            <div className="item"><img src="./assets/clients/3.png" alt="Owl_Image" /></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="services mt-150">
            <WeDo />
            <Team />
        </div>
    )
}

export default Services
