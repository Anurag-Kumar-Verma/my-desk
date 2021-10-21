import React from 'react';
import Portfolio from '../Portfolio/Portfolio';

const Home = () => {
    const History = () => {
        return(
            <section id="about" className="about mt-150 mb-50">
                <div className="container">
                    <div className="row center">
                        <div className="col-md-8 col-md-offset-2">
                            <img src="./assets/about.png" alt="Khaki HTML Template" width="300" />
                            <div className="km-space"></div>
                            <h5 className="lead">This is our most powerful template, that provide functionality to create corporate, app showcase, gaming, music, barber, etc websites.</h5>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    const Facts = () => {
        return (
            <div id="facts" className="facts mt-100 mbr-box mbr-section mbr-section--relative">
                <div className="container">
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

    const Team = () => {
        return (
            <section id="team" className="team mbr-box mbr-section mbr-section--relative">
                <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="100" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0 L50 100 L100 0 Z" fill="#ffeedb" stroke="#ffeedb"></path>
                </svg>
                <div className="container">
                    <div className="col-md-8 col-md-offset-2 col-sm-12">
                        <div className="row center mb-100">
                            <div className="section-title-parralax">
                                <div className="process-numbers">01</div>
                                <h2>Our Team</h2>
                                <p className="module-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="team-member col-md-4 col-sm-4 text-center">
                            <div className="member-thumb">
                                <div className="cover"><div className="cover-inner-left"></div></div>
                                
                                <img src="./assets/team/member-1.jpg" alt="Team Member" className="img-responsive" />
                                
                                <div className="team_cover"><div className="team_cover_inner"></div></div>
                                <div className="overlay">
                                    <h6>Nice to meet! </h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lacus, a iaculis diam.</p>
                                    <div className="social-links">
                                        <a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a>
                                        <a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
                                        <a href="https://www.google.com"><i className="fa fa-google"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <h6>Tanislav Robert</h6>
                            <span>Managing Director</span>
                        </div>
                            
                        <div className="team-member col-md-4 col-sm-4 text-center">
                            <div className="member-thumb">
                                <div className="cover"><div className="cover-inner-middle"></div></div>
                                
                                <img src="./assets/team/member-2.jpg" alt="Team Member" className="img-responsive" />
                                
                                <div className="team_cover"><div className="team_cover_inner"></div></div>
                                <div className="overlay">
                                    <h6>HELLO &amp; WELCOME! </h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lacus, a iaculis diam.</p>
                                    <div className="social-links">
                                        <a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a>
                                        <a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
                                        <a href="https://www.google.com"><i className="fa fa-google"></i></a>
                                    </div>
                                </div>
                            </div>
                                
                            <h6>Oana Calota</h6>
                            <span>Lead Developer</span>
                        </div>
                        
                        <div className="team-member col-md-4 col-sm-4 text-center ">
                            
                            <div className="member-thumb">
                                <div className="cover"><div className="cover-inner-right"></div></div>

                                <img src="./assets/team/member-3.jpg" alt="Team Member" className="img-responsive" />
                                
                                <div className="team_cover"><div className="team_cover_inner"></div></div>
                                <div className="overlay">
                                    <h6>HI FRIEND! </h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lacus, a iaculis diam.</p>
                                    <div className="social-links">
                                        <a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a>
                                        <a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
                                        <a href="https://www.google.com"><i className="fa fa-google"></i></a>
                                    </div>
                                </div>
                                </div>
                                <h6>Lucian Tanislav</h6>
                                <span>Seo Guru</span>
                            </div>
                        </div>
                    </div>
                <div className="bottom-separator hidden-xs"></div>
            </section>
        )
    }

    const Features = () => {
        return(
            <div id="features" className="features mbr-box mbr-section mbr-section--relative">
		        <div className="container">
                    <div className="row center">
                        <div className="feature-item">
                            <div className="col-md-3 col-sm-6">
                                <div className="item-head">
                                    <i className="lnr lnr-diamond"></i>
                                    <i className="far fa-gem"></i>
                                </div>
                                <h6>creative design</h6>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                        
                        <div className="feature-item">
                            <div className="col-md-3 col-sm-6">
                                <div className="item-head">
                                    <i className="lnr lnr-rocket"></i>
                                    <i className="fa fa-rocket "></i>
                                </div>
                                <h6>well organized</h6>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.e</p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="col-md-3 col-sm-6">
                                <div className="item-head">
                                    <i className="lnr lnr-mustache"></i>
                                    <i className="far fa-laugh-wink"></i>
                                </div>
                                <h6>easy to customize</h6>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="col-md-3 col-sm-6">
                                <div className="item-head">
                                    <i className="lnr lnr-phone"></i>
                                    <i className="fas fa-tty"></i>
                                </div>
                                <h6>support 24/7</h6>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
	        </div>
        )
    }

    const Service = () => {
        return (
            <section id="services" className="services mbr-box mbr-section mbr-section--relative mbr-section--fixed-size mbr-section--full-height mbr-section--bg-adapted mbr-parallax-background"  style={{backgroundImage: "url(./assets/img 1.jpg)"}}>
                <div className="section-overlay"></div>

                <div className="container">
                    <div className="row center">
                        <div className="col-md-8 col-md-offset-2 col-sm-12">
                            <div className="section-title-parralax">
                                <div className="process-numbers">02</div>
                                <h2>services</h2>
                                <p className="module-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 right col-full right-0">
                            <i className="lnr lnr-rocket"></i>
                            <i className="fas fa-rocket"></i>
                            <h6>unlimited options</h6>
                            <p>Quisque eget hendrerit eros, ut interdum magna.
                                <br />Donec urna ante, lobortis nec dictum eget, porta non turpis.
                            </p>
                        </div>
                    
                        <div className="col-lg-6 left col-full left-0">
                            <i className="lnr lnr-laptop-phone"></i>
                            <i className="fas fa-laptop"></i>
                            <h6>design &amp; development</h6>
                            <p>Quisque eget hendrerit eros, ut interdum magna.
                                <br />Donec urna ante, lobortis nec dictum eget, porta non turpis.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 right col-full right-0">
                            <i className="lnr lnr-cart"></i>
                            <i className="fas fa-shopping-cart    "></i>
                            <h6>e-commerce</h6>
                            <p>Quisque eget hendrerit eros, ut interdum magna.
                                <br />Donec urna ante, lobortis nec dictum eget, porta non turpis.
                            </p>
                        </div>

                        <div className="col-lg-6 left col-full left-0">
                            <i className="lnr lnr-cog"></i>
                            <i className="fas fa-cog"></i>
                            <h6>customizable design</h6>
                            <p>Quisque eget hendrerit eros, ut interdum magna.
                                <br />Donec urna ante, lobortis nec dictum eget, porta non turpis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    const Clients = () => {
        return (
            <div id="clients" className="clients mt-100 mbr-box mbr-section mbr-section--relative">
                <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="100" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0 L50 100 L100 0 Z" fill="#fff" stroke="#fff"></path>
                </svg>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"></div>
                        
                        <div id="owl-demo">
                            <div className="item"><img src="./assets/clients/1.png" alt="Owl" /></div>
                            <div className="item"><img src="./assets/clients/2.png" alt="Owl" /></div>
                            <div className="item"><img src="./assets/clients/3.png" alt="Owl" /></div>
                            <div className="item"><img src="./assets/clients/1.png" alt="Owl" /></div>
                            <div className="item"><img src="./assets/clients/2.png" alt="Owl" /></div>
                            <div className="item"><img src="./assets/clients/3.png" alt="Owl" /></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const Pricing = () => {
        return (
            <section id="pricing" className="pricing mbr-box mbr-section mbr-section--relative mbr-section--full-height mbr-section--bg-adapted">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 col-sm-12">
                            <div className="row center">
                                <div className="section-title mb-100">
                                    <div className="process-numbers">04</div>
                                    <h2>our prices</h2>
                                    <p className="module-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row center">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="pricing_plan">
                                <div className="plan_title"><h6>Basic</h6></div>
                                <div className="plan_price">
                                    <i className="fa fa-usd" aria-hidden="true"></i>
                                    <div className="numscroller" data-slno='1' data-min='0' data-max='29' data-delay='20' data-increment="5">29</div>
                                </div>

                                <ul className="list">
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                    <li><strong>Three</strong>year support &amp; updates</li>
                                </ul>
                                <a href="blog-inner.html" className="default-btn"> See More <i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="pricing_plan" style={{backgroundColor: "rgba(243, 239, 135, 0.58)"}}>
                                <div className="plan_title"><h6>Standard</h6></div>
                                <div className="plan_price">
                                    <i className="fa fa-usd" aria-hidden="true"></i>
                                    <div className="numscroller" data-slno='1' data-min='0' data-max='79' data-delay='15' data-increment="5">79</div>
                                </div>
                                <ul className="list">
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                    <li><strong>Two</strong>year support &amp; updates</li>
                                </ul>
                                <a href="blog-inner.html" className="default-btn"> See More <i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="pricing_plan">
                                <div className="plan_title"><h6>Advanced</h6></div>
                                <div className="plan_price">
                                    <i className="fa fa-usd" aria-hidden="true"></i>
                                    <div className="numscroller" data-slno='1' data-min='0' data-max='199' data-delay='13' data-increment="5">199</div>
                                </div>

                                <ul className="list">
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                    <li><strong>Three</strong>year support &amp; updates</li>
                                </ul>
                                <a href="blog-inner.html" className="default-btn"> See More <i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    const Contact = () => {
        return (
            <section id="contact" className="contact mbr-box mbr-section mbr-section--relative mbr-section--bg-adapted">
                <div className="container">
                    <div className="col-md-6 col-sm-12">
                        <div className="row">
                            <h4> let's work together</h4>
                                <p className="libre-text mt-50">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                    there live the blind texts.
                                </p>
    
                            <a href="contact.html" className="default-btn"> Get in touch <i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
                        </div>
                    </div>
    
                    
                    <div className=" col-md-offset-1 col-md-5 col-sm-12">
                        <div className="row center">
                            <div className="newsletter">
                                <h4>SUBSCRIBE</h4>
                                <p className="libre-text mb-50">
                                    Stay informed with our newsletter
                                </p>
                                <form action="#" method="post">
                                    <div className="input_1">
                                        <input type="text" name="email" placeholder="Enter your email adress" />
                                        <span></span>
                                    </div>
                                    <button id="submit_btn" className="default-btn"> Send <i className="fas fa-angle-double-right"></i></button>
    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    
    return (
        <div>
            <History />
            <Facts />
            <Team />
            <Features />
            <Service />
            <Portfolio />
            <Clients />
            <Pricing />
            <Contact />
        </div>
    )
}

export default Home
