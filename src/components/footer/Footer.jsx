import "./Footer.css";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">

            {/* Left side - Atlas branding */}
            <div className="footer-brand">
                <div className="footer-logo">
                    <span className="footer-logo-circle"></span>
                    <span className="footer-logo-text">Atlas</span>
                </div>
            </div>


            {/* Right side */}
            <div className="footer-content">


                <div className="footer-columns">

                    {/* Learn more */}
                    <div className="footer-column">
                        <h3>Learn more</h3>

                        <Link to="/about">About Atlas</Link>
                        <Link to="/how-it-works">How It Works</Link>
                        <Link to="/faq">FAQ</Link>
                    </div>


                    {/* Company */}
                    <div className="footer-column">
                        <h3>Support</h3>

                        <Link to="/contact">Contact us</Link>
                        <Link to="/help-center">Help center</Link>
                        <Link to="/feedback">Give feedback</Link>

                    </div>


                    {/* Contact */}
                    <div className="footer-column">
                        <h3>Legal</h3>

                        <Link to="/privacy">Privacy policy</Link>
                        <Link to="/tos">Terms of service</Link>
                        <Link to="/cookies">Cookie policy</Link>
                    </div>


                    {/* Social */}
                    <div className="footer-column footer-social">
                        <h3>Social</h3>

                        <div className="social-icons">

                            {/* Facebook */}
                            <a href="#" aria-label="Facebook">
                                <svg viewBox="0 0 24 24">
                                    <path d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.7.3-1 1-1z"/>
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a href="#" aria-label="Instagram">
                                <svg viewBox="0 0 24 24">
                                    <rect x="3" y="3" width="18" height="18" rx="5"/>
                                    <circle cx="12" cy="12" r="4"/>
                                    <circle cx="17.5" cy="6.5" r="1"/>
                                </svg>
                            </a>

                            {/* Twitter */}
                            <a href="#" aria-label="Twitter">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M21 7.1c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.6.8-2.5 1A3.8 3.8 0 0 0 11.3 9c0 .3 0 .6.1.9-3.1-.2-5.8-1.7-7.6-4-.3.5-.5 1.2-.5 1.9 0 1.3.7 2.5 1.7 3.2-.6 0-1.2-.2-1.7-.5 0 1.9 1.4 3.5 3.2 3.9-.3.1-.7.1-1 .1-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.7 2.8A7.7 7.7 0 0 1 3.5 19c-.3 0-.6 0-.9-.1A10.8 10.8 0 0 0 8.5 21c7.2 0 11.1-6 11.1-11.1v-.5c.8-.6 1.4-1.3 1.9-2.1z"/>
                                </svg>
                            </a>

                            {/* YouTube */}
                            <a href="#" aria-label="YouTube">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.7 12 4.7 12 4.7s-5.9 0-7.6.5a2.8 2.8 0 0 0-2 2C1.9 8.9 1.9 12 1.9 12s0 3.1.5 4.8a2.8 2.8 0 0 0 2 2c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.8 2.8 0 0 0 2-2c.5-1.7.5-4.8.5-4.8s0-3.1-.5-4.8z"/>
                                    <path className="play-icon" d="m10 9 5 3-5 3z"/>
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a href="#" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M5 4.5A2.5 2.5 0 1 1 5 9a2.5 2.5 0 0 1 0-4.5zM3 10h4v11H3zM9 10h4v1.5c.8-1.1 2-1.8 3.8-1.8 3.7 0 4.2 2.4 4.2 5.5V21h-4v-5.2c0-1.2 0-2.8-1.8-2.8s-2 1.3-2 2.7V21H9z"/>
                                </svg>
                            </a>

                        </div>
                    </div>

                </div>


                {/* Bottom divider + copyright */}
                <div className="footer-bottom">

                    <div className="footer-divider"></div>

                    <p>
                        @ 2026 Atlas Media&nbsp; | &nbsp;All Rights Reserved
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;