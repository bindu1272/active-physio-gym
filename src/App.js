import React from "react";
import "./css/Main.scss";
import HomePage from "./pages/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ScrollToTop from "./setup/ScrollToTop";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
                <Switch>
              
                    <ScrollToTop>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/AboutUs" component={AboutUs}/>
                        {/* <Route path="/Services" component={ServicesPage}/> */}
                        {/* <Route path="/IndustryInfo" component={IndustryInfo}/> */}
                        {/* <Route path="/ContactUs" component={ContactUs}/> */}
                        
                    </ScrollToTop>
                    
                </Switch>
                 {/* <AboutSection /> */}
                
                <Footer/>
            </BrowserRouter>
    
    
     
    </div>
  );
}

export default App;
