import React, { Component } from "react";
import Layout from "../Layout/Layout";

class Contact extends Component{
    render(){
        return(
            <>
            <Layout>
            <div id="contact" className="form-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="text-container">
                                <div className="section-title">CONTACT</div>
                                <h2>Get In Touch Using The Form</h2>
                                <p>You can stop by our office for a cup of coffee and just use the contact form below for any questions and inquiries</p>
                                <ul className="list-unstyled li-space-lg">
                                    <li className="address"><i className="fas fa-map-marker-alt"></i>22nd Innovative Street, San Francisco, CA 94043, US</li>
                                    <li><i className="fas fa-phone"></i><a href="tel:003024630820">+81 720 22 126</a></li>
                                    <li><i className="fas fa-phone"></i><a href="tel:003024630820">+81 720 22 128</a></li>
                                    <li><i className="fas fa-envelope"></i><a href="mailto:office@aria.com">office@aria.com</a></li>
                                </ul>
                                <h3>Follow Aria On Social Media</h3>

                                <span className="fa-stack">
                                    <a href="#your-link">
                                        <span className="hexagon"></span>
                                        <i className="fab fa-facebook-f fa-stack-1x"></i>
                                    </a>
                                </span>
                                <span className="fa-stack">
                                    <a href="#your-link">
                                        <span className="hexagon"></span>
                                        <i className="fab fa-twitter fa-stack-1x"></i>
                                    </a>
                                </span>
                                <span className="fa-stack">
                                    <a href="#your-link">
                                        <span className="hexagon"></span>
                                        <i className="fab fa-pinterest fa-stack-1x"></i>
                                    </a>
                                </span>
                                <span className="fa-stack">
                                    <a href="#your-link">
                                        <span className="hexagon"></span>
                                        <i className="fab fa-instagram fa-stack-1x"></i>
                                    </a>
                                </span>
                                <span className="fa-stack">
                                    <a href="#your-link">
                                        <span className="hexagon"></span>
                                        <i className="fab fa-linkedin-in fa-stack-1x"></i>
                                    </a>
                                </span>
                                <span className="fa-stack">
                                    <a href="#your-link">
                                        <span className="hexagon"></span>
                                        <i className="fab fa-behance fa-stack-1x"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            
                           
                            <form id="contactForm" data-toggle="validator" data-focus="false">
                                <div className="form-group">
                                    <input type="text" className="form-control-input" id="cname" required />
                                    <label className="label-control" for="cname">Name</label>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control-input" id="cemail" required />
                                    <label className="label-control" for="cemail">Email</label>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control-textarea" id="cmessage" required></textarea>
                                    <label className="label-control" for="cmessage">Your message</label>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group checkbox">
                                    <input type="checkbox" id="cterms" value="Agreed-to-Terms" required />I agree with Aria's stated <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms Conditions</a> 
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="form-control-submit-button">SUBMIT MESSAGE</button>
                                </div>
                                <div className="form-message">
                                    <div id="cmsgSubmit" className="h3 text-center hidden"></div>
                                </div>
                            </form>
                            

                        </div> 
                    </div> 
                </div> 
            </div> 
            </Layout>
            

            </>
        );
    };
}

export default Contact;