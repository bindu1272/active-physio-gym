import React from "react";
import Img1 from "../images/P9171621_2.jpg";
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
              <p>Physio Gym Membership at $22.95 per week*</p>
              <ul>
                <li>24/7 or Staffed hours access</li>
                <li>Physio Gym Exercise Software to assist</li>
                <li>Zoned exercise space for efficiency and safety</li>
              </ul>
              <p>
                *Conditions and eligibility criteria apply, please see details
                in store.
              </p>
            </div>
            <a href="#" className="readmore_btn mt-4 white-border">
              Book Online &nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
