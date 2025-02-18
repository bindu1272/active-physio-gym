import React from "react";
import Team1 from "../images/APGpurple.png";
import Team2 from "../images/APGpurple.png";
import Team3 from "../images/APGpurple.png";

function Index() {
  return (
    <>
      <section className="team_section">
        <div
          className="team-area-3 bg-fix pt-5 pb-5"
          data-background="assets/img/bg/team-bg-1.jpg"
        >
          <div className="container pt-4 pb-5">
            <div className="row">
              <div className="col-xl-12">
                <div className="section-title-2 text-center">
                  <h3 className="m-auto p-0 text-white mb-4 pb-4">
                    We Have an Expert Team of Physiotherapists and Trainers
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Updated Section for Personal Training */}
              <div className="col-lg-4 col-md-6">
                <div className="team-wrap-3 mb-30">
                  <div className="team-img">
                    <img src={Team1} alt="Personalised Training" />
                  </div>
                  <div className="team-content">
                    <h3>
                      <a href="/Team">Personal Training</a>
                    </h3>
                    <span>Personalised Training: One on One Physio Coaching and Support</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="team-wrap-3 mb-30">
                  <div className="team-img">
                    <img src={Team2} alt="img" />
                  </div>
                  <div className="team-content">
                    <h3>
                      <a href="/Team">Physiotherapy</a>
                    </h3>
                    <span>Physiotherapist</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="team-wrap-3 mb-30">
                  <div className="team-img">
                    <img src={Team3} alt="img" />
                  </div>
                  <div className="team-content">
                    <h3>
                      <a href="/Team">Functional Training</a>
                    </h3>
                    <span>Physiotherapy Functional Training: exercise and physio gym classes</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 text-center mt-5">
                <a href="/Team" className="readmore_btn mt-5 white-border">
                  OUR TRAINING TEAM <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
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
