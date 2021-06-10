import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Team1 from "../images/member-1.jpg";
import Team2 from "../images/member-2.jpg";
import Team3 from "../images/member-3.jpg";
import Team4 from "../images/member-4.jpg";
function Index() {
  return (
    <>
      <Header />
      <section className="inner-banner">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>Team</h1>
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
                <li>Team</li>
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
              <div class="col-lg-3 col-md-6 mb-5">
                <div class="team-wrap-3 mb-30">
                  <div class="team-img">
                    <img src={Team1} alt="Team" />
                  </div>
                  <div class="team-content">
                    <h3>
                      <a href="trainer-details.html ">Matthew Squires</a>
                    </h3>
                    <span>Consultant Physiotherapist</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-9 col-md-6">
                <div class="wpb_wrapper">
                  <h3>Matthew Squires</h3>
                  <h4>Consultant Physiotherapist</h4>
                  <h5>
                    MHS (Sports and Manipulative Physiotherapy)
                    <br />
                    BAS (Physiotherapy – Honours) The Sydney University Medal
                    <br />
                    BAS (Biomedicine)
                    <br />
                    Cert V (Pilates Instructor)
                    <br />
                    Certified Gyrotonic (Level 1 and 2) and Gyrokinesis (Level 1
                    and 2) Instructor
                    <br />
                    Cert V (Education and training)
                  </h5>
                  <p>
                    Physiotherapy offers me a journey to travel with people into
                    their lives, to help overcome physical conditions which
                    prevent them in achieving their best.
                  </p>
                  <p>
                    It started with my understanding of pain and how devastating
                    such an invisible intruder can be on people’s lives.
                  </p>
                  <p>
                    Creating
                    <strong>
                      <em>Physio Gym</em>
                    </strong>
                    and working with my team has allowed me to build the
                    pathways for rehabilitation and wellness for many physical
                    diseases, injuries and disabilities. The experiences I have
                    shared with my patients has taught me the importance of how
                    physiotherapy can shape their lives for the better.
                  </p>
                </div>
              </div>
        
            </div>
          </div>







          <div style={{backgroundColor:"#f1f6fc"}}>
          <div class="container pt-5 pb-5">
            <div class="row">
             
              <div class="col-lg-9 col-md-6">
                <div class="wpb_wrapper">
                  <h3>Matthew Squires</h3>
                  <h4>Consultant Physiotherapist</h4>
                  <h5>
                    MHS (Sports and Manipulative Physiotherapy)
                    <br />
                    BAS (Physiotherapy – Honours) The Sydney University Medal
                    <br />
                    BAS (Biomedicine)
                    <br />
                    Cert V (Pilates Instructor)
                    <br />
                    Certified Gyrotonic (Level 1 and 2) and Gyrokinesis (Level 1
                    and 2) Instructor
                    <br />
                    Cert V (Education and training)
                  </h5>
                  <p>
                    Physiotherapy offers me a journey to travel with people into
                    their lives, to help overcome physical conditions which
                    prevent them in achieving their best.
                  </p>
                  <p>
                    It started with my understanding of pain and how devastating
                    such an invisible intruder can be on people’s lives.
                  </p>
                  <p>
                    Creating
                    <strong>
                      <em>Physio Gym</em>
                    </strong>
                    and working with my team has allowed me to build the
                    pathways for rehabilitation and wellness for many physical
                    diseases, injuries and disabilities. The experiences I have
                    shared with my patients has taught me the importance of how
                    physiotherapy can shape their lives for the better.
                  </p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="team-wrap-3 mb-30">
                  <div class="team-img">
                    <img src={Team2} alt="img" />
                  </div>
                  <div class="team-content">
                    <h3>
                      <a href="trainer-details.html ">Pavan Kasthuriarachchi</a>
                    </h3>
                    <span>Clinical Physiotherapist</span>
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
