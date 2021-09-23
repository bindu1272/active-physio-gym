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
                <div className="col-sm-7 d-flex justify-content-center flex-column">
                    <h3 className="mb-4">Active Physio Gym</h3>
                    <h5 style={{fontSize:22, lineHeight:"36px"}}>Sports injury management and exercise experts, with a physiotherapist guided approach to health and fitness.</h5>
                    <h5 style={{fontSize:22, lineHeight:"36px"}}>Experienced staff with both local and national sports experience. </h5>
                    {/* <a href="#" className="readmore_btn mt-4">Read More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a> */}
                </div>
               
            </div>
        </div>
     </section>
  );
}

export default Index;
