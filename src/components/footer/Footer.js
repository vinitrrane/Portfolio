import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">VR</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>


                </ul>
                <div className="footer__social">
                    <a href="https://github.com/vinitrrane" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className='bx bxl-github' ></i>
                    </a>
                    <a href="https://www.linkedin.com/in/vinitrrane" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className='bx bxl-linkedin' ></i>
                    </a>
                    <a href="https://www.instagram.com/vinitrrane/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className='bx bxl-instagram' ></i>
                    </a>
                    <a href="https://twitter.com/vinitrrane" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className='bx bxl-twitter' ></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Vinit Rane. All rigths reserved</span>
            </div>
        </footer>
    )
};

export default Footer;
