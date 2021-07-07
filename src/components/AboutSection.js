import React from 'react';
import Img1 from "../images/pic5.jpg";
function Index() {

  return (
    <section className="about_section main-about-info">
        <div className="container">
            <div className="row">
            <div className="col-sm-5">
                    <img src={Img1} className="img-fluid"/>
                </div>
                <div className="col-sm-7 d-flex justify-content-center flex-column" style={{alignItems:"end"}}>
                    <h3 className="mb-4">Active Physio Gym</h3>
                    <p>Physiotherapist care for your injuries and train with you to strengthen your body.</p>
                    <p>Our hands on care guides your awareness into how troubled muscles, nerves, elastic tissue or joints may be causing you pain and restricting your movements.</p>
                    <p>We understand that for many people exercising is not easy. We work with you individually and in classes for you to learn your program...</p>
                    <a href="#" className="readmore_btn mt-4">Read More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
               
            </div>
        </div>
     </section>
  );
}

export default Index;
