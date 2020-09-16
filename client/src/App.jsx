import React, { useState, useEffect } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Blog from "./views/Blog";
import Contact from "./views/Contact";
import Events from "./views/Events";
import Gallery from "./views/Gallery";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Productions from "./views/Productions";
import UpcomingEvents from "./views/UpcomingEvents";
import MenuIcon from "./components/MenuIcon";
import Footer from "./components/Footer";
function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const changeShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div>
      <BrowserRouter>
        {showNavbar ? <Navbar changeShowNavbar={changeShowNavbar} /> : null}
        <MenuIcon changeShowNavbar={changeShowNavbar} showNavbar={showNavbar} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                showNavbar={showNavbar}
                changeShowNavbar={changeShowNavbar}
              />
            )}
          />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/courses" component={Events} />
          <Route exact path="/upcoming-events" component={UpcomingEvents} />
          <Route exact path="/productions" component={Productions} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
