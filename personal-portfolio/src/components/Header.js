import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  return (
    <Router>
      <header class="main-header">
        <h1 id="name">React Portfolio</h1>
        {/* <Switch> */}
          <Route exact path="/Personal-Portfolio" component={Nav} />
        {/* </Switch> */}
      </header>
    </Router>
  );
};

export default Header;
