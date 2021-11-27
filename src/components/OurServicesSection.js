import React from "react";
import Team1 from "../images/P9161026_2.jpg";
import Team2 from "../images/P9161329.jpg";
import Team3 from "../images/team3.jpg";
import {Link} from "react-router-dom";

function Index() {
  return (
    <>
      <section className="physiotherapy-section">
          <div className="container">
            <div className="row">
            <div className="col-sm-12 text-center mb-5 pb-3">
                      <h1 style={{textTransform:"uppercase", fontSize:40, fontWeight:600}}>Our Services</h1>
                  </div>
            </div>
              <div className="row">
              <div className="col-sm-4 img_block">
                      <img src={Team1} className="img-fluid"/>
                  </div>
                  <div className="col-sm-4 img_block">
                      <img src={Team2} className="img-fluid" style={{top:0}}/>
                  </div>
                  <div className="col-sm-4 img_block">
                      <img src={Team3} className="img-fluid" style={{top:0}}/>
                  </div>
                  <div className="col-sm-4">
                     <div className=" info_block">
                     <h1>Management and Rehab of Complex Sports Injury </h1>
                      <ul>
                        <li>Expert Assessment and Treatment</li>
                        <li>Practised Exercise Prescription...</li>
                      </ul>
                    <Link className="readmore_btn mt-4" to="/OurServices">Read More &nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                     </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="info_block">
                    <h1>Group Exercise Mentoring</h1>
                    <ul>
                        <li>Functional Training</li>
                        <li>Pilates and Yoga</li>
                      </ul>
                       <Link className="readmore_btn mt-4" to="/OurServices">Read More &nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                    </div>
                  </div>
                  <div className="col-sm-4 ">
                     <div className="info_block">
                     <h1>Chronic Condition Management</h1>
                     <ul>
                        <li>Medicare Bulk Bill Physiotherapy (EPC)</li>
                        <li>Osteoarthritis Assistance</li>
                      </ul>
                    <Link className="readmore_btn mt-4" to="/OurServices">Read More &nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                     </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}

export default Index;
