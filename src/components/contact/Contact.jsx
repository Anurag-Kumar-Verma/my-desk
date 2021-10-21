import React from 'react'

const Contact = () => {
    return (
        <section className="contact_brick">
            <div className="container mt-100">
                <div className="row center">
                    <div className="col-md-8 col-md-offset-2 col-sm-12">
                        <div className="section-title">
                            <h2 className="mb-50">GET IN TOUCH WITH US</h2>
                            <p className="module-subtitle">Latest project we have made. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-100">
                    <div className="col-md-4 col-sm-4 text-center wow slideInLeft">
                        <div className="detail">
                            <i className="fas fa-map-marker-alt    "></i>
                            <h4><span>You can find us at</span></h4>
                            <h3>Our Location</h3>
                            <p>
                                100 Corigliano <br/>
                                Italy, IT 27912
                            </p>
                        </div>
                    </div>
                    
                    <div className="col-md-4 col-sm-4 text-center wow slideInUp">
                        <div className="detail">
                            <i className="fas fa-mobile-alt    "></i>
                            <h4><span>Our mail and phone</span></h4>
                            <h3>Contacts</h3>
                            <p>
                                <abbr title="Email">E:</abbr> mail@mail.com
                                <br />
                                <abbr title="Phone">P:</abbr> 123-456-7890
                            </p>
                        </div>
                    </div>
                    
                    <div className="col-md-4 col-sm-4 text-center wow slideInRight">
                        <div className="detail">
                            <i className="fas fa-clock    "></i>
                            <h4><span>We work on the following</span></h4>
                            <h3>Schedule</h3>
                            <p>
                                M-F: 8 AM - 4 PM<br/>
                                Sa: 8 AM - 12 PM<br/>
                                Su: Closed
                            </p>
                        </div>
                    </div>
                </div>
                                
                <div className="contact-form bottom">
                    <form id="main-contact-form" name="contact-form" method="post" action="sendemail.php">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <input type="text" name="name" id="name" className="form-control" required="required" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="company" id="company" className="form-control" required="required" placeholder="Company" />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" id="email" className="form-control" required="required" placeholder="Email Id" />
                            </div>
                        </div>
            
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <textarea name="message" id="message" required="required" className="form-control" rows="8" placeholder="Your text here"></textarea>
                            </div>
                            <div className="form-group">
                                <button id="submit_btn" className="default-btn gray-btn"> Send <i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
