import React from "react";
import  "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/About/About";
import Services from "./components/services/Services";
import Education from "./components/Education/Education";
import Portfolio from "./components/portfolio/Portfolio";

import Project from "./components/project/Project";

import Contact from "./components/contact/Contact";




const App = () =>{
    return( 
        <>
        <Sidebar/>
        <main className="main">
        <Home />
        <About />
        <Services />
        <Education/>
        <Portfolio />
        
        <Project />
        
        <Contact />

        </main>

        </>

    );
};
export default App;