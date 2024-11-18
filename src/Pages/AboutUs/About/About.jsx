/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

/* eslint-disable react/no-unescaped-entities */

import React from "react";
import "../AboutUs.css";
import "./About.css";
import about_img from "../assets/about.jpg";
import play_icon from "../assets/play-icon.png";

const About = ({ setPlaystate }) => {
  return (
    <div className="About">
      <div className="about-left">
        <img src={about_img} alt="" className="about-png" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlaystate(true);
          }}
        />
      </div>

      <div className="about-right">
        <h3>ABOUT OUR INSTITUTION</h3>
        <h2>Empowering Engineers for the Future</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          reprehenderit architecto cupiditate! Doloremque impedit quam laborum
          ratione voluptatum quia a!
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          doloribus doloremque voluptatum dignissimos atque excepturi?
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quae,
          nobis, quo doloremque commodi, inventore neque obcaecati autem
          possimus illum assumenda delectus. Ut delectus, veritatis cum possimus
          facilis doloribus ex fuga illo quo atque reprehenderit?
        </p>
      </div>
    </div>
  );
};

export default About;
