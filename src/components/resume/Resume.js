import React from "react";
import "./Resume.css";

const Resume = () => {


    return (
        <section className="resume section" id="resume">
            <h2 className="section__title">Resume</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="resume__container container grid">

                <div className="resume__sections">
                    <div className="resume__content resume__content-active">


                        <div className="resume__data">
                            <div></div>
                            <div>
                                <span className="resume__rounder"></span>
                                <span className="resume__line"></span>
                            </div>
                            <div>
                                <div className="resume__calender">
                                    <i className='bx bxs-calendar' ></i>
                                    Apr 2019 - Dec 2022
                                </div>
                                <h3 className="resume__title">Process Associate</h3>
                                <p className="resume__subtitle">Frontend Development</p>
                                <span className="resume__subtitle">Tata Consultancy Services</span>
                            </div>
                        </div>
                        <div className="resume__data">
                            <div>
                                <div className="resume__calender text-end">
                                    <i className='bx bxs-calendar' ></i>
                                    2018
                                </div>
                                <h3 className="resume__title text-end">BSc Computer Science</h3>
                                <span className="resume__subtitle text-end">Lords Universal College</span>
                            </div>
                            <div>
                                <span className="resume__rounder"></span>
                                <span className="resume__line"></span>
                            </div>

                        </div>

                        <div className="resume__data">
                            <div></div>
                            <div>
                                <span className="resume__rounder"></span>
                                <span className="resume__line"></span>
                            </div>
                            <div>
                                <div className="resume__calender">
                                    <i className='bx bxs-calendar' ></i>
                                    2015
                                </div>
                                <h3 className="resume__title">HSC</h3>
                                <span className="resume__subtitle">Valia College</span>
                            </div>
                        </div>

                        <div className="resume__data">
                            <div>
                                <div className="resume__calender text-end" >
                                    <i className='bx bxs-calendar' ></i>
                                    2011
                                </div>
                                <h3 className="resume__title text-end">SSC</h3>
                                <span className="resume__subtitle text-end">Adarsh Vidyalaya</span>
                            </div>
                            <div>
                                <span className="resume__rounder"></span>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
};

export default Resume;
