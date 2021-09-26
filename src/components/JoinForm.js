import React from "react";
import Img1 from "../images/P9171621_2.jpg";
import FreeMembership from "./FreeMembership";
function Index() {
  return (
    <section
      className="about_section main-about-info"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container p-0">
        <div className="row m-0">
          <div className="col-sm-6 p-0 ">
            <img src={Img1} className="img-fluid shadow-none h-100" />
          </div>
          <div className="col-sm-6 p-0 d-flex justify-content-center flex-column">
          <div className="free_member_ship ">
          <FreeMembership/>
          </div>
           </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
