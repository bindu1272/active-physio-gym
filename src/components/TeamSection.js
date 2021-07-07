import React from "react";
import Shape1 from "../images/shape-28.png";
import Team1 from "../images/member-1.jpg";
import Team2 from "../images/member-2.jpg";
import Team3 from "../images/member-1.jpg";
import Team4 from "../images/member-2.jpg";
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
                  VIEW ALL TRAINER <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
       
  
        </div>
      </section>
    </>
  );
}

export default Index;
