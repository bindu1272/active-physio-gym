import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Team1 from "../images/P9161035_2.jpg";
import Team2 from "../images/P9171621_2.jpg";
function Index() {
  return (
    <>
      <Header />
      <section className="inner-banner">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>Membership</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="bread-crumb">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <span> / </span>
                </li>
                <li>Membership</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="team_section">
        <div
          class="team-area-3 bg-fix pt-5"
          style={{ backgroundImage: "none", backgroundColor: "#fff" }}
        >
          <div class="container pt-4 pb-5">
            <div class="row">
              <div class="col-lg-4 col-md-6 mb-5">
                <div class="team-wrap-3 mb-30">
                  <div class="team-img">
                    <img src={Team1} alt="Team" />
                  </div>
                </div>
              </div>
              <div class="col-lg-8 col-md-6">
                <div class="wpb_wrapper">
                  <h3>Physiotherapy Care</h3>
                  <p>
                    Our team works together to provide you with a full body
                    assessment and a clear pathway to achieve your
                    rehabilitation goals.
                  </p>
                  <p>
                    Once your program is agreed, you have a choice of exercise
                    options, privately with your physiotherapist, as part of a
                    physiotherapist led class, or independently with a
                    membership*
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: "#f1f6fc" }}>
            <div class="container pt-5 pb-5">
              <div class="row">
                <div class="col-lg-8 col-md-6">
                  <div class="wpb_wrapper">
                    <h3>
                      Physiotherapist led rehabilitation and conditioning
                      classes
                    </h3>
                    <p>
                      Learn your prescribed program with the assistance of your
                      physiotherapist in our Physio Gym group classes.
                    </p>
                    <p>
                      These small group classes support up to 6 participants to
                      actively learn and consolidate their own program. Your
                      physiotherapist will monitor your equipment set up and
                      exercise activity in as they move between individual
                      exercise zones.
                    </p>
                    <p>
                      We love teaching our classes! It’s a great way for us to
                      help you master your program, and accelerate your
                      rehabilitation in a safe and supportive environment.
                    </p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="team-wrap-3 mb-30">
                    <div class="team-img">
                      <img src={Team2} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: "#fff" }} className="pt-5 pb-5">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div class="wpb_text_column wpb_content_element  classes_table">
                    <div class="wpb_wrapper">
                    <table className="table border table-striped">
                        <tbody>
                          <tr>
                            <td  width="86">
                              <strong>Class</strong>
                            </td>
                            <td  width="86">
                              <strong>Monday</strong>
                            </td>
                            <td  width="86">
                              <strong>Tuesday</strong>
                            </td>
                            <td  width="86">
                              <strong>Wednesday</strong>
                            </td>
                            <td  width="86">
                              <strong>Thursday</strong>
                            </td>
                            <td  width="86">
                              <strong>Friday</strong>
                            </td>
                          </tr>
                          <tr>
                            <td width="86">6 am</td>
                            <td width="86">
                              Matthew
                              <br />
                              <strong>
                                <span>
                                  <a className="btn btn-primary" href="#">
                                    Book
                                  </a>
                                </span>
                              </strong>
                            </td>
                            <td width="86">
                              <span>Matthew</span>
                              <br />
                              <span>
                                <strong>
                                  <a className="btn btn-primary" href="#">
                                    Book
                                  </a>
                                </strong>
                              </span>
                            </td>
                            <td width="86">
                              Matthew
                              <br />
                              <strong>
                                <span>
                                  <a className="btn btn-primary" href="#">
                                    Book
                                  </a>
                                </span>
                              </strong>
                            </td>
                            <td width="86">
                              Matthew
                              <br />
                              <span>
                                <strong>
                                  <a className="btn btn-primary" href="#">
                                    Book
                                  </a>
                                </strong>
                              </span>
                            </td>
                            <td width="86">
                              Matthew
                              <br />
                              <span>
                                <strong>
                                  <a className="btn btn-primary" href="#">
                                    Book
                                  </a>
                                </strong>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td width="86">8am</td>
                            <td width="86"></td>
                            <td width="86"></td>
                            <td width="86"></td>
                            <td width="86"></td>
                            <td width="86"></td>
                          </tr>
                          <tr>
                            <td width="86">10 am</td>
                            <td width="86">
                              Matthew
                              <br />
                              <strong>
                                <span>
                                  <a className="btn btn-primary" href="#">
                                    Book
                                  </a>
                                </span>
                              </strong>
                            </td>
                            <td width="86">
                              Mathew
                              <br />
                              <strong>
                                <span>
                                  <a className="btn btn-primary" href="#">
                                    Book
                                  </a>
                                </span>
                              </strong>
                            </td>
                            <td width="86">
                              Pavan
                              <br />
                              <strong>
                                <span>
                                  <a className="btn btn-primary" href="#">
                                    Book
                                  </a>
                                </span>
                              </strong>
                            </td>
                            <td width="86"></td>
                            <td width="86">
                              Matthew
                              <br />
                              <strong>
                                <span>
                                  <a className="btn btn-primary" href="#">
                                    Book
                                  </a>
                                </span>
                              </strong>
                            </td>
                          </tr>
                          <tr>
                            <td width="86">11.30am</td>
                            <td width="86"></td>
                            <td width="86">
                              Pavan
                              <br />
                              <span>
                                <strong>
                                  <a className="btn btn-primary" href="#">
                                    Book
                                  </a>
                                </strong>
                              </span>
                            </td>
                            <td width="86"></td>
                            <td width="86"></td>
                            <td width="86"></td>
                          </tr>
                          <tr>
                            <td width="86">5 pm</td>
                            <td width="86"></td>
                            <td width="86"></td>
                            <td width="86"></td>
                            <td width="86">
                              Pavan
                              <br />
                              <span>
                                <strong>
                                  <a className="btn btn-primary" href="#">
                                    Book
                                  </a>
                                </strong>
                              </span>
                            </td>
                            <td width="86"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
