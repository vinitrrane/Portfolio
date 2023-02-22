import React from "react";
import CoreSkills from "./CoreSkills";
import OtherSkills from "./OtherSkills";
import "./Skills.css"

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical Level</span>

            <div className="skills__container container grid">
                <CoreSkills />
                <OtherSkills />
            </div>

        </section>
    )
};

export default Skills;
