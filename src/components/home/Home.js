import React from "react";
import "./Home.css"
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import videoBg from "../../assets/video/videobg.mp4"

const Home = (props) => {
    return (
        <section className="home section" id="home">
            <video preload="auto" className={props.is ? "home__background-video home-dark" : "home__background-video"} playsInline autoPlay muted loop >
                <source src={videoBg} type="video/mp4" />
            </video>
            <div className="home__container container grid">
                <div className="home__content">
                    <Data />
                </div>
            </div>
            <Social />
            <ScrollDown />
        </section>
    );
};

export default Home;
