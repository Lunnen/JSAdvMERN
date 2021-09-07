import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";

/*const App = () => {
  const [view, setView] = useState("default");

  const changeView = () => {
    view == "default" ? setView("addMovie") : setView("default");
  };

  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar myFunction={changeView} />
      <Switch>
        <Route path="/" exact component={() => <Home addMovieState={view} myFunction={changeView} />} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </Container>
  </BrowserRouter>;
};*/
const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
