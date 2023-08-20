import React from 'react';
import Img1 from "../images/slider-1.JPG";
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
                        <li>Privacy Policy</li>
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

<p>At activephysiogym.com, accessible from www.activephysiogym.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by activephysiogym.com and how we use it.</p>


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
