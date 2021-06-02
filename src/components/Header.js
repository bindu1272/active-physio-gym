import React,{useEffect} from 'react';
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";

function Index() {
  const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 100 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['header-section'];
  if(scrolled){
    x.push('sticky');
  }
  return (
    <>
      <header className={x.join(" ")} >
        <div className="navigation">
          <nav className="navbar_main navbar-expand-lg navbar-light d-block">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 d-flex">
                <a className="navbar-brand2" href="#">
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
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav m-auto">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="AboutUs">
                          About
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">
                          Team
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">
                        Physiotherapy
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">
                        Membership
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">
                        Contact
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link book_btn" to="#">
                        Book Online
                        </Link>
                      </li>
                    </ul>
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
