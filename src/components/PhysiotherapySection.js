import React from "react";
import Team4 from "../images/P9161026_2.jpg";
import Team5 from "../images/P9161329.jpg";
import { Link } from "react-router-dom";

function Index() {
  return (
    <>
      <section className="physiotherapy-section">
          <div className="container">
              <div className="row">
                  <div className="col-sm-12 text-center mb-5 pb-3">
                      <h1 style={{textTransform:"uppercase", fontSize:40, fontWeight:600}}>Physiotherapy</h1>
                  </div>
                  <div className="col-sm-6 info_block">
                      <h1>Back and Neck Pain</h1>
                      <p>We understand that back and neck pain can be debilitating. Initial assessment and treatment by your physiotherapist will focus on hands on care to relieve pain and regain movement...</p>
                    <Link className="readmore_btn mt-4">Read More</Link>
                  </div>
                  <div className="col-sm-6 p-0 img_block">
                      <img src={Team4} className="img-fluid"/>
                  </div>
                  <div className="col-sm-6 p-0 img_block">
                      <img src={Team5} className="img-fluid" style={{top:0}}/>
                  </div>
                  <div className="col-sm-6 info_block">
                      <h1>Sports Injuries and post-operative management</h1>
                      <p>From soccer to tennis, basketball to rowing, running to walking, no matter the sport we can help. We offer a comprehensive approach to injury management, movement training...</p>
                    <Link className="readmore_btn mt-4">Read More</Link>
                  </div>
                 


              </div>
          </div>
      </section>
    </>
  );
}

export default Index;
