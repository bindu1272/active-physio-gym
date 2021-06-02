import React from 'react';
import Img1 from "../images/pic5.jpg";
function Index() {
  
  return (
    <section className="about_section">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <h3 className="mb-4">Activephysio Gym Rehabilitation and Wellness Center</h3>
                    <p>Physiotherapist care for your injuries and train with you to strengthen your body.</p>
                    <p>Our hands on care guides your awareness into how troubled muscles, nerves, elastic tissue or joints may be causing you pain and restricting your movements.</p>
                    <p>We understand that for many people exercising is not easy. We work with you individually and in classes for you to learn your program...</p>
                    <a href="#" className="readmore_btn mt-4">Read More</a>
                </div>
                <div className="col-sm-6">
                    <img src={Img1} className="img-fluid rounded shadow p-2"/>
                </div>
            </div>
        </div>
     </section>
  );
}

export default Index;
