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
                    <span>Physiotherapist</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-9 col-md-6">
                <div class="wpb_wrapper">
                  <h6>Joseph Nakhoul</h6>
                  <p>
                    {" "}
                    <strong>Physiotherapist</strong>
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
                    <h6>Allied health</h6>
                    <p>
                      <strong>Physiotherapists</strong>
                    </p>
<p>
  Our team of physiotherapists at Active Physio Gym comine advanced education with a passion for helping others achieve their physical health goals. Each therapist brings a unique blend of expertise, experience, and a personal touch to their practice.
</p>
<p>
  Our professionals are not just experts in their field; they are also compassionate individuals who understand the importance of a supportive and encouraging environment in the healing process. They are committed to providing personalized care that addresses the specific needs and goals of each patient.
</p>
<p>
  At Active Physio Gym, we pride ourselves on our holistic approach to physiotherapy. Our team employs a range of techniques, from manual therapy to tailored exercise programs, to ensure the best possible outcomes for our patients. Whether you're an athlete looking to improve your performance, recovering from an injury, or seeking to improve your overall physical well-being, our physiotherapists are here to support you every step of the way.
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
                        <a href="#">Allied health - Physiotherapy</a>
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
                      <a href="# ">Active Physio Gym</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div class="col-lg-9 col-md-6">
                <div class="wpb_wrapper">
                  <h6>Group Fitness and Personalised Training</h6>
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
  At Active Physio Gym, our group fitness and personalized training classes stand out for their exceptional quality and effectiveness. We are dedicated to offering classes that cater to all fitness levels, ensuring everyone can find a workout that resonates with their fitness goals.
</p>
<p>
  Our certified trainers are experts in creating dynamic, engaging, and challenging workouts that not only boost your physical health but also uplift your spirit. They are committed to fostering a supportive and motivating environment where every member can thrive and push their boundaries.
</p>
<p>
  The success of our programs is evident in the outstanding results our members achieve. Whether you're looking to lose weight, build strength, improve flexibility, or enhance your overall fitness, our group classes and personalized training sessions are designed to deliver measurable improvements. At Active Physio Gym, we're not just about workouts; we're about creating lasting changes that enhance your quality of life.
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
