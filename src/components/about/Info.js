import React from "react";

const Info = () => {
    return (

        <div className="about__info grid">
            <div className="about__box">
                <i className='bx bxs-award about__icon' ></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">2+ Years</span>
            </div>
            <div className="about__box">
                <i className='bx bxs-briefcase-alt-2 about__icon' ></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">20+ Projects</span>
            </div>

        </div>
    )
};

export default Info;
