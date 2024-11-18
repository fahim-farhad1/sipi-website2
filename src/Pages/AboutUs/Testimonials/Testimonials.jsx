/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import "./Testimonials.css";
import "../AboutUs.css";
import next_icon from "../assets/next-icon.png";
import back_icon from "../assets/back-icon.png";
import user_1 from "../assets/user-1.png";
import user_2 from "../assets/user-2.png";
import user_3 from "../assets/user-3.png";
import user_4 from "../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideforward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translate(${tx}%)`;
  };

  const slidebackword = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translate(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} className="next-btn" onClick={slideforward} />
      <img src={back_icon} className="back-btn" onClick={slidebackword} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Afifa Aysha</h3>
                  <span>Softwer devloper</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
                corrupti consectetur quibusdam numquam aspernatur unde
                voluptate. Sed blanditiis iste voluptas veniam aperiam tempora
                maiores non!
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Imtiaz Hossain</h3>
                  <span>Sr softwer devloper</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
                corrupti consectetur quibusdam numquam aspernatur unde
                voluptate. Sed blanditiis iste voluptas veniam aperiam tempora
                maiores non!
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Arju</h3>
                  <span>DUET</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
                corrupti consectetur quibusdam numquam aspernatur unde
                voluptate. Sed blanditiis iste voluptas veniam aperiam tempora
                maiores non!
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Kazi rafi</h3>
                  <span>Sr devloper</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
                corrupti consectetur quibusdam numquam aspernatur unde
                voluptate. Sed blanditiis iste voluptas veniam aperiam tempora
                maiores non!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
