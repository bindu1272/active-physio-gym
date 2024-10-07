import React, { useEffect } from 'react';
import Logo from "../images/logo.svg";
import { Link, NavLink } from "react-router-dom";

function Index() {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  let x = ['header-section'];
  if (scrolled) {
    x.push('sticky');
  }

  return (
    <>
      <header className={x.join(" ")}>
        <div className="navigation">
          <nav className="navbar_main navbar-expand-lg navbar-light d-block">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 d-flex">
                  <div className="nav-info-section">
                    <a className="navbar-brand" href="/">
                      <img src={Logo} height={80} />
                    </a>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link exact activeClassName='selected' className="nav-link" to="/">
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <NavLink activeClassName='selected' className="nav-link" exact to="/AboutUs">
                            About Us
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink activeClassName="selected" className="nav-link" exact to="/Team">
                            Expert Team
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink activeClassName="selected" className="nav-link" exact to="/Gallery">
                            Photo Gallery
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink activeClassName="selected" className="nav-link" exact to="/OurServices">
                            Our Services
                          </NavLink>
                        </li>
                        {/* New Ramp Physio and Fitness Link */}
<li className="nav-item">
  <a
    href="https://www.rampphysioandfitness.com.au/"
    target="_blank"
    rel="noopener noreferrer"
    className="nav-link"
  >
    Ramp Physio and Fitness
  </a>
</li>

                        <li className="nav-item">
                          <NavLink activeClassName="selected" className="nav-link" exact to="/Membership">
                            Gym Membership
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink activeClassName="selected" className="nav-link" exact to="/Contact">
                            Contact US
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link book_btn" to="/Contact">
                            Book Online &nbsp; &nbsp; <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Index;
