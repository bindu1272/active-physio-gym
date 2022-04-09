import React from "react";
import Header from "../components/Header";
import {Link} from "react-router-dom";
import Team1 from "../images/JosephNakhoul.png";
import Team2 from "../images/MattS.png";
import Team3 from "../images/KshitizK.png";

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
                      <a href="# ">Joseph Nakhoul </a>
                    </h3>
                    <span>Head Physiotherapist</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-9 col-md-6">
                <div class="wpb_wrapper">
                  <h6>Joseph Nakhoul</h6>
                  <p>
                    {" "}
                    <strong>Head Physiotherapist</strong>
                  </p>
                  <p>
                    Joseph began his musculoskeletal physiotherapy career in
                    2013, following graduating from The Australian Catholic
                    University. Since then, he has worked alongside South Sydney
                    Rabbitohs, and has a passion for private practice
                    physiotherapy.{" "}
                  </p>
                  <p>
                    Joseph is a proud father to 3 beautiful children. He also
                    has a love of rugby league, and previously competed at a
                    semi-professional level.{" "}
                  </p>
                  <p>
                    Joseph prides himself on his ability to relate with his
                    patients. Through his sporting career, Joseph returned from
                    over 20 injuries. Combined with his knowledge of both
                    athletic rehabilitation and manual therapy skills, Joseph is
                    the perfect partner to assist you with managing your
                    injuries. Joseph’s empowering and confident approach to
                    physiotherapy practice, will allow you to feel supported and
                    safe on your health care journey.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: "#f1f6fc" }}>
            <div class="container pt-5 pb-5">
              <div class="row">
                <div class="col-lg-9 col-md-6">
                  <div class="wpb_wrapper">
                    <h6>Matthew Sayed </h6>
                    <p>
                      <strong>Physiotherapist</strong>
                    </p>
                    <p>
                      Matthew completed a Doctor of Physiotherapy at Macquarie
                      University, following a Bachelor of Sport and Exercise
                      Science at Australian Catholic University.{" "}
                    </p>
                    <p>
                      Matthew has played many sports, but his passion is golf,
                      which is definitely a love hate relationship.
                    </p>
                    <p>
                      Matthew physiotherapy experience has seen him work
                      alongside patients ranging from sports athletes, to
                      hospitalised patients, and everything in between. Matthew
                      brings an empathetic, and relaxed atmosphere to his
                      patients in physiotherapy, and utilises techniques of
                      manual therapy and exercise guidelines, to assist patients
                      in accomplishing their goals.{" "}
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
                        <a href="#">Matthew Sayed</a>
                      </h3>
                      <span>Physiotherapist</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container pt-5 pb-5">
            <div class="row">
              <div class="col-lg-3 col-md-6 mb-5">
                <div class="team-wrap-3 mb-30">
                  <div class="team-img">
                    <img src={Team3} alt="Team" />
                  </div>
                  <div class="team-content">
                    <h3>
                      <a href="# ">Kshitiz Khadka </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div class="col-lg-9 col-md-6">
                <div class="wpb_wrapper">
                  <h6>Kshitiz Khadka</h6>
                  <div className="row">
                    <div className="col-sm-4">
                      <h6 style={{ fontSize: 18, fontWeight: "bold" }}>
                        {" "}
                        Certifications:{" "}
                      </h6>
                      <p>Allied Health Professional</p>
                      <p>Diploma in Fitness</p>
                      <p>Diploma in Remedial Massage</p>
                      <p>Cert III / Cert IV - Fitness </p>
                      <p>Diploma in Personal Nutrition</p>
                    </div>
                    <div className="col-sm-4">
                      <h6 style={{ fontSize: 18, fontWeight: "bold" }}>
                        {" "}
                        Specialitie(s):{" "}
                      </h6>
                      <ul style={{ lineHeight: "50px" }}>
                        <li>Functional Training</li>
                        <li>Powerlifting </li>
                        <li>Strength and Conditioning</li>
                        <li>Weight Loss and Body Transformation</li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    Kshitiz has more than ten years of experience as a Personal
                    Trainer and Group Fitness Instructor. He started
                    professional bodybuilding at an young age which later
                    developed his passion towards fitness and has been helping
                    people to be the best version of themselves. Kshitiz is a
                    qualified Allied Health Professional, has been working as a
                    Physio Assistant for past two years. This extensive
                    experience and qualification has been beneficial to all our
                    members while training.
                  </p>
                  <p>
                    He is providing customised programs, support and guidance for
                    our members to achieve the results they deserve from their
                    hard work. He helps clients with an education rather than
                    just short term results which will both help them to be in
                    best shape of their life and also providing them the tools
                    to maintain it for the rest of life.{" "}
                  </p>
                  <p>
                    He works with every single individual on identifying the
                    “why”. Developing personalised adherence strategies for
                    their personality and lifestyle.
                  </p>
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
