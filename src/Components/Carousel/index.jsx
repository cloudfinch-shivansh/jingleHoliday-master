import React from "react";
import { Carousel } from "antd";
import "./style.css";

const contentStyle = {
  height: "100%",
  width: "100%",
  color: "#fff",
  background: "#364d79",
  objectFit: "contain",
};

export const ImageCarousel = ({ images }) => (
  <Carousel effect="scrollx" autoplay>
    <div>
      <div className="carousel-box" style={{ backgroundImage: `url(${images[0]})` }} >
        <div className="details-box">
            <h1>Welcome to Jingle Holiday Bazar Pvt Ltd.</h1>
            <p>The Badrinath</p>
            <br />
            <button className="btns">Contact</button>
        </div>
      </div>
    </div>
    <div>
      <div className="carousel-box" style={{ backgroundImage: `url(${images[1]})` }} >
        <div className="details-box">
            <h1>Welcome to Jingle Holiday Bazar Pvt Ltd.</h1>
            <p>Rameshwaram</p>
            <br />
            <button className="btns">Contact</button>
        </div>
      </div>
    </div>
    <div>
      <div className="carousel-box" style={{ backgroundImage: `url(${images[2]})` }} >
        <div className="details-box">
            <h1>Welcome to Jingle Holiday Bazar Pvt Ltd.</h1>
            <p>The Pink City of Jaipur</p>
            <br />
            <button className="btns">Contact</button>
        </div>
      </div>
    </div>
  </Carousel>
);
