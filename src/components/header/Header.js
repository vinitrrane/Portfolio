import React, { useState } from "react";
import "./Header.css";
import { DarkModeSwitch } from 'react-toggle-dark-mode';


const Header = (props) => {

    const [toggle, setToggle] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    const toggleHandler = (current) => {
        setToggle(!toggle);
        setActiveNav(current);
    }

    const [headerScroll, setHeaderScroll] = useState(false)

    window.addEventListener("scroll", function () {
        if (this.scrollY >= 560) { setHeaderScroll(true) }
        else { setHeaderScroll(false) }

    })

    return (
        <header className={`header ${headerScroll ? "show-header" : ""}`}>
            <nav className="nav container">
                <a href="#home" className="nav__logo">VR</a>
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className={activeNav === "#home" ? "nav__link active-link" : "nav__link"} onClick={() => toggleHandler("#home")}>
                                <i className="bx bx-home-alt nav__icon"></i>Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className={activeNav === "#about" ? "nav__link active-link" : "nav__link"} onClick={() => toggleHandler("#about")}>
                                <i className="bx bx-user nav__icon"></i>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"} onClick={() => toggleHandler("#skills")}>
                                <i className="bx bx-file nav__icon"></i>Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#resume" className={activeNav === "#resume" ? "nav__link active-link" : "nav__link"} onClick={() => toggleHandler("#resume")}>
                                <i className='bx bxs-book-bookmark nav__icon'></i>Resume
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"} onClick={() => toggleHandler("#portfolio")}>
                                <i className="bx bx-image-alt nav__icon"></i>Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"} onClick={() => toggleHandler("#contact")}>
                                <i className="bx bx-send nav__icon"></i>Contact
                            </a>
                        </li>
                    </ul>
                    <div className="nav__close">
                        <button onClick={() => setToggle(!toggle)}>
                            <i className="bx bx-x nav__close-icon"></i>
                        </button>
                    </div>
                </div>
                <div className="nav__mode">
                    <DarkModeSwitch
                        checked={props.is}
                        onChange={props.mode}
                        size={18}
                    />
                </div>
                <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
                    <i className="bx bx-menu nav__toggle"></i>
                </div>
            </nav>
        </header >
    )
};

export default Header;

