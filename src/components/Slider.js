import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import slider1 from "../images/slider-2.JPG";
import slider2 from "../images/slider-3.JPG";
import slider3 from "../images/slider-1.JPG";
import slider4 from "../images/slider-1_better.JPG";
import slider5 from "../images/slider03-2-old.jpg";
import slider6 from "../images/slide5.jpg";
import slider7 from "../images/slider-3.JPG";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Index() {
  return (
    <div className="slider_section">
      {/* <div className="logo-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <a href="#">
                <img src={Logo} height={250} />
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <AutoplaySlider
        bullets={false}
        play={true}
        style={{ height: 700 }}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={5000}
      >
        <div>
          <div className="logo-section">
            {/* <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
             <h4>Grow Your</h4>
             <h1>STRENGTH</h1>
            </div>
          </div>
        </div> */}
          </div>
          <img src={slider1} />
        </div>
        <div>
          <div className="logo-section">
            {/* <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
             <h4>Grow Your</h4>
             <h1>STRENGTH</h1>
            </div>
          </div>
        </div> */}
          </div>
          <img src={slider2} />
        </div>
        <div>
          <div className="logo-section"></div>
          <img src={slider3} />
        </div>
      </AutoplaySlider>
    </div>
  );
}

export default Index;
