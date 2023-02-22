import React from "react";
import "./About.css"
import AboutImg from "../../assets/img/Vinit.jpg";
import Info from "./Info";

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="aboutImg" className="about__img" />

                <div className="about__data">
                    <Info />
                    <p className="about__description">
                        I'm a Frontend Web Developer based in Mumbai, India. I have been developing websites for over 2 years. The technologies I use are HTML, CSS, Bootstrap, Javascript, React.Js, etc. I create responsive websites that are displayed on all devices desktops and smartphones.</p>

                    <a target="_blank" rel="noreferrer" download="Reusume" href="https://drive.google.com/file/d/1dBv6Sc3Ylkp0u5PUsfeH4c0gKEKMaEv0/view?usp=sharing" className="button button--flex">Download Resume
                    </a>
                </div>
            </div>
        </section>
    )
};

export default About;
