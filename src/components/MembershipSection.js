import React from "react";
import Img1 from "../images/P9171621_2.jpg";
import {Link} from "react-router-dom";

function Index() {
  return (
    <section className="membership_Section">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 img_block">
            <img src={Img1} className="img-fluid" />
          </div>
          <div className="col-sm-7 d-flex flex-column justify-content-center align-items-start">
            <div class="wpb_wrapper ">
              <h3
                className="mb-4"
                style={{
                  textTransform: "uppercase",
                  fontSize: 40,
                  fontWeight: 600,
                  color: "#00adef",
                }}
              >
                Become a Member
              </h3>
              <p>Active Physio Gym Membership</p>
              <ul>
                <li>Small Group Personalised Training</li>
                <li>Personalised Approach</li>
                <li>Guided Training According to your Fitness Goals</li>
              </ul>
              <p>
                Affordable rates and flexible memberships
              </p>
            </div>
            <Link to="/Contact" className="readmore_btn mt-4 white-border">
              Book Online &nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
