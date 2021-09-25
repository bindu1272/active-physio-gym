import React, {useState} from "react";
import Slider from "../components/Slider";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import OurServicesSection from "../components/OurServicesSection";
import MembershipSection from "../components/MembershipSection";
import Modal from 'react-modal';
// import FreeMembership from "../components/FreeMembership";
import JoinFormSection from "../components/JoinForm";
import {Link} from "react-router-dom";

function Index() {
  const [modalIsOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
        {/* <div className="full-loader">
        <SyncOutlined spin />
        </div> */}

    {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // style={customStyles}
        className="onloadmodal"
      >
        <Link className="close-btn" to="#" onClick={closeModal}><i class="fa fa-times" aria-hidden="true"></i></Link>
        <div className="member-shop-form">
          <FreeMembership onClose={closeModal}/>
        </div>
      </Modal> */}

      <Header />
      <Slider />
      <JoinFormSection/>
      <AboutSection />
      <TeamSection />
      <OurServicesSection />
      <MembershipSection />
    </>
  );
}

export default Index;
