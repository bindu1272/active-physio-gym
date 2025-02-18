import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Team1 from "../images/APGpurple.png";
import Team2 from "../images/APGpurple.png";
import Team3 from "../images/APGpurple.png";

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
        {/* Allied Health & Personal Training Section */}
        <div className="container pt-4 pb-5">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="team-wrap-3">
                <div className="team-img" style={{ maxWidth: "100%", textAlign: "center" }}>
                  <img src={Team1} alt="Allied Health" style={{ width: "100%", maxWidth: "200px" }} />
                </div>
                <div className="team-content mt-3">
                  <h3>
                    <a href="#">Allied Health & Physio</a>
                  </h3>
                  <span>Personal Training</span>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-6">
              <div className="wpb_wrapper">
                <h6>Allied Health & Physio</h6>
                <p><strong>Our Physiotherapists</strong></p>
                <p>Our team at Active Physio Gym combines extensive knowledge in musculoskeletal and sports physiotherapy with a deep commitment to helping you achieve your health and fitness goals. Each therapist and trainer is equipped with advanced skills to deliver personalized support in both rehabilitation and fitness training.</p>
                <p>At Active Physio Gym, we pride ourselves on our holistic approach. We use tailored exercise programs, manual therapy, and personalized training sessions to ensure the best results for our clients. Whether you're aiming for athletic performance, recovering from an injury, or working towards improved wellness, our team provides the expertise and encouragement to support your journey.</p>
              </div>
            </div>
          </div>
        </div>

        {/* NDIS, WorkCover, and Physiotherapy Team Section */}
        <div className="container pt-4 pb-5" style={{ backgroundColor: "#f1f6fc" }}>
          <div className="row align-items-center">
            <div className="col-lg-9 col-md-6">
              <div className="wpb_wrapper">
                <h2>NDIS, WorkCover, and Physiotherapy Team</h2>
                <p>At Active Physio Gym, we are proud to support NDIS and WorkCover patients through specialized physiotherapy services. Our team is dedicated to providing accessible and effective treatment plans that help clients manage pain, enhance mobility, and achieve greater independence. We work closely with NDIS participants and WorkCover clients to deliver personalized care aligned with each person's unique needs.</p>
                <p>Our experienced physiotherapists understand the complexities of WorkCover cases and NDIS requirements, and they are skilled in crafting tailored treatment plans to address these specific needs. We aim to empower each client with effective rehabilitation, education, and support to improve their quality of life and return to work where possible.</p>
                <p>From acute injury recovery to chronic condition management, our physiotherapy services are designed to offer a comprehensive solution for those under NDIS and WorkCover. Our commitment is to ensure that each patient receives the highest standard of care, helping them regain strength, mobility, and confidence in their daily activities.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="team-wrap-3">
                <div className="team-img" style={{ maxWidth: "100%", textAlign: "center" }}>
                  <img src={Team2} alt="NDIS and WorkCover Physiotherapy" style={{ width: "100%", maxWidth: "200px" }} />
                </div>
                <div className="team-content mt-3">
                  <h3>
                    <a href="#">NDIS & WorkCover Physiotherapy</a>
                  </h3>
                  <span>Physiotherapy Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Group Fitness and Personalized Training Section */}
        <div className="container pt-4 pb-5">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="team-wrap-3">
                <div className="team-img" style={{ maxWidth: "100%", textAlign: "center" }}>
                  <img src={Team3} alt="Group Fitness and Training" style={{ width: "100%", maxWidth: "200px" }} />
                </div>
                <div className="team-content mt-3">
                  <h3>
                    <a href="#">Active Physio Gym</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-6">
              <div className="wpb_wrapper">
                <h2>Group Physio Fitness and Personal Training</h2>
                <p>At Active Physio Gym, we offer a comprehensive range of physiotherapy group fitness classes and personalized training programs designed to meet your unique fitness goals. Our experienced trainers are dedicated to creating a supportive and energetic environment where you can work towards achieving optimal health and wellness.</p>
                <div className="row">
                  <div className="col-md-6">
                    <h3>Our Classes</h3>
                    <p>Our group fitness classes acater to all levels of experience and fitness. From high-intensity interval training (HIIT) to yoga and pilates, our classes are designed to increase your fitness, improve your health, and give you an energizing workout experience.</p>
                  </div>
                  <div className="col-md-6">
                    <h3>Personalized Training</h3>
                    <p>For those seeking a more tailored approach, our physiotherapy designed personalized training programs are the perfect solution. Our certified personal trainers will work with you to create a customized plan that targets your specific needs, whether it's weight loss, muscle gain, or improving athletic performance.</p>
                  </div>
                </div>
                <p>Our certified trainers are experts in creating dynamic, engaging, and challenging workouts that boost physical health while uplifting the spirit. We’re dedicated to providing classes that cater to all fitness levels and promoting lasting, positive changes that enhance quality of life.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
