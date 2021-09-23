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
          style={{
            backgroundImage: "none",
            backgroundColor: "rgb(241, 246, 252)",
          }}
        >
          <div class="container pt-4 pb-5">
            <div class="row">
              <div class="col-lg-4 col-md-6 mb-5">
                <div class="team-wrap-3 mb-30">
                  <h1>Management and rehab of complex sports injury </h1>
                  <ul>
                    <li>Management and rehab of complex sports injury </li>
                    <li>
                      Practised exercise prescription and collaborative goal
                      setting
                    </li>
                    <li>Supportive Environment </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mb-5">
                <div class="team-wrap-3 mb-30">
                  <h1>Group Exercise mentoring </h1>
                  <ul>
                    <li>Functional Training </li>
                    <li>
                    Pilates and Yoga
                    </li>
                    <li>Affordable Personalised Exercise </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mb-5">
                <div class="team-wrap-3 mb-30">
                  <h1>Chronic Condition Management </h1>
                  <ul>
                    <li>Medicare Bulk Bill Physiotherapy (EPC) </li>
                    <li>
                    Osteoarthritis assistance
                    </li>
                    <li>Reduction of likelihood of developing chronic Illness </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mb-5">
                <div class="team-wrap-3 mb-30">
                  <h1>NDIS and Workers Compensation </h1>
                  <ul>
                    <li>SIRA Certified</li>
                    <li>
                    NDIS Registered Providers 
                    </li>
                    <li>Child and Elderly Friendly</li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mb-5">
                <div class="team-wrap-3 mb-30">
                  <h1>Pre/Post Surgery management  </h1>
                  <ul>
                    <li>Guided Treatment </li>
                    <li>Collaboration with Surgeon and Doctor </li>
                    <li>Reduced risk of post surgery complications  </li>
                    <li>Pain Management </li>
                    
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mb-5">
                <div class="team-wrap-3 mb-30">
                  <h1>Wide Range of Treatment Options  </h1>
                  <ul>
                    <li>Professional Advice and Education </li>
                    <li>Individualised and Targeted Exercise Prescription</li>
                    <li>Hands on treatment </li>
                    <li>Dry Needling/Acupuncture</li>
                    <li>Joint Mobilisations </li>
                    
                  </ul>
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
