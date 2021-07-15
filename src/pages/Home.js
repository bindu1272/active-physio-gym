import React, {useState} from "react";
import Slider from "../components/Slider";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import PhysiotherapySection from "../components/PhysiotherapySection";
import MembershipSection from "../components/MembershipSection";
import AddMemberShip from "../components/AddMember";
import Modal from 'react-modal';
import {SyncOutlined} from '@ant-design/icons';
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

    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // style={customStyles}
        className="onloadmodal"
      >
        <a className="close-btn" onClick={closeModal}><i class="fa fa-times" aria-hidden="true"></i></a>
        <div className="member-shop-form">
          <AddMemberShip/>
        </div>
      </Modal>

      <Header />
      <Slider />
      <AboutSection />
      <TeamSection />
      <PhysiotherapySection />
      <MembershipSection />
    </>
  );
}

export default Index;
