import React, { useState } from "react";
import "./ScrollUp.css";

const ScrollUp = () => {
    const [scrolling, setScrolling] = useState(false)

    window.addEventListener("scroll", function () {
        if (this.scrollY >= 560) { setScrolling(true) }
        else { setScrolling(false) }

    })

    // console.log(scrollUp);
    return (
        <a href="#home" className={`scrollup ${scrolling ? "show-scroll" : ""}`}>
            <i className='bx bxs-chevron-up scrollup__icon' ></i>
        </a>
    )
};

export default ScrollUp;
