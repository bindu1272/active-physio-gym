import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Team1 from "../images/P9161035_2.jpg";
import Team2 from "../images/P9171621_2.jpg";
function Index() {
  return (
    <>
      <Header />
      <section className="inner-banner">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>Physiotheraphy</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="bread-crumb">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  
                  <span> / </span>
                </li>
                <li>Physiotheraphy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="team_section">
        <div
          class="team-area-3 bg-fix pt-5"
          style={{ backgroundImage: "none", backgroundColor: "#fff" }}
        >
          <div class="container pt-4 pb-5">
            <div class="row">
              <div class="col-lg-4 col-md-6 mb-5">
                <div class="team-wrap-3 mb-30">
                  <div class="team-img">
                    <img src={Team1} alt="Team" />
                  </div>
     
                </div>
              </div>
              <div class="col-lg-8 col-md-6">
                <div class="wpb_wrapper">
                  <h3>Physiotherapy Care</h3>
                 <p>Our team works together to provide you with a full body assessment and a clear pathway to achieve your rehabilitation goals.</p>
                 <p>Once your program is agreed, you have a choice of exercise options, privately with your physiotherapist, as part of a physiotherapist led class, or independently with a membership*</p>
                </div>
              </div>
        
            </div>
          </div>

          <div style={{backgroundColor:"#f1f6fc"}}>
          <div class="container pt-5 pb-5">
            <div class="row">
             
              <div class="col-lg-8 col-md-6">
                <div class="wpb_wrapper">
                 <h3>Physiotherapist led rehabilitation and conditioning classes</h3>
                 <p>Learn your prescribed program with the assistance of your physiotherapist in our Physio Gym group classes.</p>
                 <p>These small group classes support up to 6 participants to actively learn and consolidate their own program. Your physiotherapist will monitor your equipment set up and exercise activity in as they move between individual exercise zones.</p>
                 <p>We love teaching our classes! It’s a great way for us to help you master your program, and accelerate your rehabilitation in a safe and supportive environment.</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="team-wrap-3 mb-30">
                  <div class="team-img">
                    <img src={Team2} alt="img" />
                  </div>
           
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
