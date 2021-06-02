import React from "react";
import Icon1 from "../images/icon-10.png";
import Icon2 from "../images/icon-11.png";
import Icon3 from "../images/icon-12.png";
import Icon4 from "../images/icon-13.png";
import Shape1 from "../images/shape-28.png";
import Team1 from "../images/member-1.jpg";
import Team2 from "../images/member-2.jpg";
import Team3 from "../images/member-3.jpg";
import Team4 from "../images/member-4.jpg";
function Index() {
  return (
    <>
      <section className="team_section">
        <div
          class="team-area-3 bg-fix pt-5 pb-5"
          data-background="assets/img/bg/team-bg-1.jpg"
        >
          <div class="container pt-4 pb-5">
            <div class="row">
              <div class="col-xl-12">
                <div class="section-title-2 text-center">
                  <h3 className="m-auto p-0 text-white mb-4 pb-4">
                    We Have Expert Team Member Meet Our Trainer
                  </h3>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3 col-md-6">
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
              <div class="col-lg-3 col-md-6">
                <div class="team-wrap-3 mb-30">
                  <div class="team-img">
                    <img src={Team3} alt="" />
                  </div>
                  <div class="team-content">
                    <h3>
                      <a href="trainer-details.html ">Brett Peterson</a>
                    </h3>
                    <span>Practice Manager</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="team-wrap-3 mb-30">
                  <div class="team-img">
                    <img src={Team4} alt="" />
                  </div>
                  <div class="team-content">
                    <h3>
                      <a href="trainer-details.html ">Michelle O’Brien</a>
                    </h3>
                    <span>Medical Receptionist</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-12 text-center mt-5">
                <a href="trainer.html" class="readmore_btn mt-5 white-border">
                  VIEW ALL TRAINER <i class="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="team-shape-1">
            <img src={Shape1} alt="shape" />
          </div>
          <div class="team-icon-1">
            <img src={Icon1} alt="icon" />
          </div>
          <div class="team-icon-2">
            <img src={Icon2} alt="icon" />
          </div>
          <div class="team-icon-3">
            <img src={Icon3} alt="icon" />
          </div>
          <div class="team-icon-4">
            <img src={Icon4} alt="icon" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
