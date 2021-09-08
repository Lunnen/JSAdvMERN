import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import HomeUser from "./components/HomeUser/Home";
import { PrivateRoute } from "./routecontrol/PrivateRoute";
import { PublicRoute } from "./routecontrol/PublicRoute";

const App = () => (
    <BrowserRouter>
        <Container maxWidth="lg" disableGutters={true}>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <PublicRoute path="/auth" exact component={Auth} />
                <PrivateRoute path="/addmovie" exact component={HomeUser} />
            </Switch>
        </Container>
    </BrowserRouter>
);

export default App;
