import React from "react";
import "./css/Main.scss";
import HomePage from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Physiotheraphy from "./pages/Physiotheraphy";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";
import Admin from "./admin/Admin";
import Dashboard from "./admin/Dashboard";
import Notifications from "./admin/Notifications";
import ScrollToTop from "./setup/ScrollToTop";
import Footer from "./components/Footer";
import Logout from "./pages/Logout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <ScrollToTop>
            <Route exact path="/" component={HomePage} />
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/Team" component={Team} />
            <Route path="/Physiotheraphy" component={Physiotheraphy} />
            <Route path="/Membership" component={Membership} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Admin" component={Admin} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/Notifications" component={Notifications} />
            <Route path="/logout" component={Logout} />
          </ScrollToTop>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
