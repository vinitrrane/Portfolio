import React, { useEffect, useState } from "react";
import { projectsNav, projectsData } from "./Data";
import ProjectItems from "./ProjectItems"

const Projects = () => {

    const [item, setItem] = useState({ name: "all" });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectsData);
        }
        else {
            const filterProjects = projectsData.filter((projects) => { return projects.category.toLowerCase() === item.name; }
            )
            setProjects(filterProjects);
        }
    }, [item])

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index)
    }
    return (
        <div>
            <div className="project__filters">
                {projectsNav.map((item, index) => {
                    return (
                        <span className={`${active === index ? "active-work" : ""} project__item`} onClick={(e) => handleClick(e, index)} key={index}>{item.name}</span>
                    )
                })}
            </div>
            <div className="project__container container grid">
                {
                    projects.map((item) => {
                        return <ProjectItems item={item} key={item.id} />
                    })
                }
            </div>
        </div>

    )
};

export default Projects;
