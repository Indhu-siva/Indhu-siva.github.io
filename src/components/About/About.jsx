import React from 'react';
import "./about.css";
import Image from "../../assets/8340849.png";
import AboutBox from "./AboutBox.jsx";

const About=()=>{
    return(
        <section className="about container" id='about'>
            <h2 className="section">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">I am Indhumathi, web developer. Im currently pursuing Master of Computer Applications in Dr.Mahalingam College of Engineering and Technology</p>
                        <a href="" className="btn">Download CV</a>
                    </div>
                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development(HTML,CSS,JS,REACT)</h3>
                                <span className="skills__number ">90%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Java</h3>
                                <span className="skills__number ">80%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage java"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">SQL</h3>
                                <span className="skills__number">90%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage HTML"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <AboutBox />
        </section>

    )
}
export default About;