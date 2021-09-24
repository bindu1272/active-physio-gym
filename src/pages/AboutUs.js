import React from 'react';
import Img1 from "../images/pic5.jpg";
import Header from "../components/Header";
import {Link} from "react-router-dom";

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
                    <p>Active Physio Gym is where exercise science meets exceptional health care, and delivers a management system to cater to your injury management and fitness. Our physiotherapists and trainers collaborate with a multidisciplinary approach, and possess the skillset to assist you on the path to improvements in strength, mobility and quality of life. </p>
                    <p>Our ability to both diagnose and rehabilitate musculoskeletal injuries, related to all aspects of both sport and daily life, apply evidence based practice to assist you back to the life you love. </p>
                    <p>We operate in Homebush on Parramatta road, and our services allow us to bring optimal health care to the local community, and patients of all ages, conditions and lifestyles. </p>
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
