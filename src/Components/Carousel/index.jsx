import React from "react";
import { Carousel } from "antd";
import "./style.css";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const contentStyle = {
  height: "100%",
  width: "100%",
  color: "#fff",
  background: "#364d79",
  objectFit: "contain",
};

export const ImageCarousel = ({ images }) => (
  <Carousel effect="scrollx" autoplay prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}>
    <div>
      <div className="carousel-box" style={{ backgroundImage: `url(${images[0]})` }}>
        <div className="details-box">
          <h1>Welcome to Jingle Holiday Bazar Pvt Ltd.</h1>
          <p>The Badrinath</p>
          <br />
          <button className="btns">Contact</button>
          
         
        </div>
      </div>
    </div>
    <div>
      <div className="carousel-box" style={{ backgroundImage: `url(${images[1]})` }}>
        <div className="details-box">
          <h1>Welcome to Jingle Holiday Bazar Pvt Ltd.</h1>
          <p>Rameshwaram</p>
          <br />
          <button className="btns">Contact</button>
        </div>
      </div>
    </div>
    <div>
      <div className="carousel-box" style={{ backgroundImage: `url(${images[2]})` }}>
        <div className="details-box">
          <h1>Welcome to Jingle Holiday Bazar Pvt Ltd.</h1>
          <p>The Pink City of Jaipur</p>
          <br />
          <button className="btns">Contact</button>
        </div>
      </div>
    </div>
    <div>
      <div className="carousel-box" style={{ backgroundImage: `url(${images[3]})` }}>
        <div className="details-box">
          <h1>Welcome to Jingle Holiday Bazar Pvt Ltd.</h1>
          <p>Rajasthan</p>
          <br />
          <button className="btns">Contact</button>
        </div>
      </div>
    </div>
    <div>
      <div className="carousel-box" style={{ backgroundImage: `url(${images[4]})` }}>
        <div className="details-box">
          <h1>Welcome to Jingle Holiday Bazar Pvt Ltd.</h1>
          <p>Pondicherry</p>
          <br />
          <button className="btns">Contact</button>
        </div>
      </div>
      
    </div>
    <div>
      <div className="carousel-box" style={{ backgroundImage: `url(${images[5]})` }}>
        <div className="details-box">
          <h1>Welcome to Jingle Holiday Bazar Pvt Ltd.</h1>
          <p>Himalayas Mountain Range in Asia</p>
          <br />
          <button className="btns">Contact</button>
        </div>
      </div>
    </div>
    <div>
      <div className="carousel-box" style={{ backgroundImage: `url(${images[6]})` }}>
        <div className="details-box">
          <h1>Welcome to Jingle Holiday Bazar Pvt Ltd.</h1>
          <p>Akshardham Delhi</p>
          <br />
          <button className="btns">Contact</button>
        </div>
      </div>
    </div>
    <div>
      <div className="carousel-box" style={{ backgroundImage: `url(${images[7]})` }}>
        <div className="details-box">
          <h1>Welcome to Jingle Holiday Bazar Pvt Ltd.</h1>
          <p>Goechala,Sikkim</p>
          <br />
          <button className="btns">Contact</button>
        </div>
      </div>
    </div>
    <div>
      <div className="carousel-box" style={{ backgroundImage: `url(${images[8]})` }}>
        <div className="details-box">
          <h1>Welcome to Jingle Holiday Bazar Pvt Ltd.</h1>
          <p>Darjeeling , WestBengal</p>
          <br />
          <button className="btns">Contact</button>
        </div>
      </div>
    </div>
  </Carousel>
);
