import React from "react";
import Typed from "react-typed";

const Data = () => {
    const textLines = [
        `DEVELOPER`,
        `CODER`,
    ];
    return (
        <div className="home__data">

            <h3 className="home__title">
                &lt; <Typed strings={textLines} typeSpeed={60} backSpeed={50} loop={true} /> &gt;
            </h3>

            <p className="home__description">Frontend web developer who writes clean, elegant and efficient code.
            </p>
            <a href="#contact" className="button button--flex">
                Say Hello!
            </a>
        </div>
    );
};

export default Data;
