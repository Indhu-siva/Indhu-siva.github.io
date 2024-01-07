import React from 'react';
import "./home.css";
import Me from "../../assets/8340824.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './SrcollDown';
import Shapes from './Shapes';

const Home=()=>{
    return(
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">Indhumathi</h1>
                <span className="home__education">Im an Front-End Developer</span>

                <HeaderSocials />

                <a href="#contact" className='btn'>About Me</a>

                <ScrollDown />
            </div>
            <Shapes />
        </section>

    )
}
export default Home;