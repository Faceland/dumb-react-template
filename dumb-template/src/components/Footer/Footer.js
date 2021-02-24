import * as React from "react";
import './footer.scss'
import {Row, Col} from 'react-flexbox-grid';

export const Footer = (props) => {

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <a><img src="https://i.imgur.com/68K3HWd.mp4" className="img-fluid" alt="logo"/></a>
                                </div>
                                <div className="footer-text">
                                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor
                                        incididuntut consec tetur adipisicing
                                        elit,Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow us</span>
                                    <a><i className="fab fa-facebook-f facebook-bg"></i></a>
                                    <a><i className="fab fa-twitter twitter-bg"></i></a>
                                    <a><i className="fab fa-google-plus-g google-bg"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><a>Home</a></li>
                                    <li><a>about</a></li>
                                    <li><a>services</a></li>
                                    <li><a>portfolio</a></li>
                                    <li><a>Contact</a></li>
                                    <li><a>About us</a></li>
                                    <li><a>Our Services</a></li>
                                    <li><a>Expert Team</a></li>
                                    <li><a>Contact us</a></li>
                                    <li><a>Latest News</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Subscribe</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Email Address"/>
                                        <button><i className="fab fa-telegram-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div className="copyright-text">
                                <p>Copyright &copy; 2018, All Right Reserved <a>Anup</a></p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                            <div className="footer-menu">
                                <ul>
                                    <li><a>Home</a></li>
                                    <li><a>Terms</a></li>
                                    <li><a>Privacy</a></li>
                                    <li><a>Policy</a></li>
                                    <li><a>Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}