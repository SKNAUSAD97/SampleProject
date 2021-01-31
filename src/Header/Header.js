import react, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component{
    render(){
        return(
            <>
                <nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
                    <a className="navbar-brand logo-text page-scroll" href="index.html">Aria</a>
                    <a className="navbar-brand logo-image" href="index.html"><img src="images/logo.svg" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-awesome fas fa-bars"></span>
                        <span className="navbar-toggler-awesome fas fa-times"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#header">HOME <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#intro">INTRO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#services">SERVICES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#callMe">CALL ME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#projects">PROJECTS</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle page-scroll" href="#about" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">ABOUT</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="terms-conditions.html"><span className="item-text">TERMS CONDITIONS</span></a>
                                    <div className="dropdown-items-divide-hr"></div>
                                    <a className="dropdown-item" href="privacy-policy.html"><span className="item-text">PRIVACY POLICY</span></a>
                                </div>
                            </li>

                            <li className="nav-item">
                                <Link to="/contact"className="nav-link page-scroll">CONTACT</Link>
                            </li>
                        </ul>
                        <span className="nav-item social-icons">
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
                        </span>
                    </div>
                </nav> 

                <header id="header" className="header">
                    <div className="header-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="text-container">
                                        <h1>BUSINESS <span id="js-rotating">TEMPLATE, SERVICES, SOLUTIONS</span></h1>
                                        <p className="p-heading p-large">Aria is a top consultancy company specializing in business growth using online marketing and conversion optimization tactics</p>
                                        <a className="btn-solid-lg page-scroll" href="#intro">DISCOVER</a>
                                    </div>
                                </div>
                            </div> 
                        </div> 
                    </div> 
                </header>
               
            </>
        );
    };
}
export default Header;