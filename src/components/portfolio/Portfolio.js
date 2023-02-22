import React from "react";
import Projects from "./Projects";
import "./Portfolio.css"

const Portfolio = () => {
    return (

        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">My Recent Work</span>
            <Projects />
        </section>
    )
};

export default Portfolio;
