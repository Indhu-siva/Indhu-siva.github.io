import React from "react";
import "./project.css";
import Image1 from "../../assets/customer-reviews-svgrepo-com.svg";
import Image2 from "../../assets/iot-develop.webp";
import Image3 from "../../assets/ml.avif";

const Project = () => {
  return (
    <section className="project container section"id="project">
      <h2 className="section">Projects</h2>

      <div className="project__container grid">
        <div className="project__item">
          <img src={Image1} alt="" className="project__img" />
          <h3 className="project__plans">Fake review Monitoring System</h3>
          <p className="project__title"></p>
          <p className="project__support">This project will find out fake reviews made by the social 
media optimization team by identifying the IP address using PHP 
and MYSQL.This monitors the IP Address of the systems tracking the review of the product. If the IP repeats for several products frequently the n it is considered as fake IP and blocked.</p>
          <a href="your_project_link_here" target="_blank" rel="noopener noreferrer" className="project__link-button">
            View Project
          </a>
        </div>
        <div className="project__item">
          <img src={Image2} alt="" className="project__img" />
          <h3 className="project__plans">Intelligent Electrical Device Handler using Internet of Things Using IOT </h3>
          <p className="project__title"></p>
          <p className="project__support">The main objective of this initiative is to reduce the energy 
waste. Monitoring the electrical components is the purpose of this 
research (Lights and fans).This light and fan will be automatically 
down when no one is in the room to save energy and the main 
objective is to automatically control the fan and lights.This uses PIR sensor to detect the human movements.</p>
          <a href="your_project_link_here" target="_blank" rel="noopener noreferrer" className="project__link-button">
            View Project
          </a>
        </div>
        <div className="project__item">
          <img src={Image3} alt="" className="project__img" />
          <h3 className="project__plans">News Classification Detection Using Machine Learning</h3>
          <p className="project__title"></p>
          <p className="project__support">The main aim of this project is to focus on classifying fake 
news on social media with textual content (text classification). It bulids a model for prediction using logistic and linear algorithms.Here the dataset used is train.csv. This is splitted into train and test datasets.
This study obtained an accuracy range of 90 to 100% using 
PYTHON and MACHINE-LEARNING different classifiers.
</p>
          <a href="your_project_link_here" target="_blank" rel="noopener noreferrer" className="project__link-button">
            View Project
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Project;