import React from 'react';
import Img1 from "../images/pic5.jpg";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Index() {
  
  return (
      <>
      <Header />
      <section className="inner-banner">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h1>About Us</h1>
                </div>
            </div>
        </div>
       
      </section>
      <div className="bread-crumb">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li> <span> / </span> </li>
                        <li>About Us</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    <section className="about_section">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <h3 className="mb-4">Active Physio Gym</h3>
                    <p>Physiotherapist care for your injuries and train with you to strengthen your body.</p>
                    <p>Our hands on care guides your awareness into how troubled muscles, nerves, elastic tissue or joints may be causing you pain and restricting your movements.</p>
                    <p>We understand that for many people exercising is not easy. We work with you individually and in classes for you to learn your program, feel safe and keep motivated. With a Physio Gym 24/7 membership you can discover the potential of your exercises to change your life.</p>
                    <a href="#" className="readmore_btn mt-4">Read More</a>
                </div>
                <div className="col-sm-6">
                    <img src={Img1} className="img-fluid rounded shadow p-2"/>
                </div>
            </div>
        </div>
     </section>
     </>
  );
}

export default Index;
