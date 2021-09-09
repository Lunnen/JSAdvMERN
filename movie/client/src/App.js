import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Movielist from "./components/Movielist";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import Manage from "./components/Manage";
import { PrivateRoute } from "./routecontrol/PrivateRoute";
import { PublicRoute } from "./routecontrol/PublicRoute";

document.body.style.backgroundColor = "cornflowerblue";

const App = () => (
    <BrowserRouter>
        <Container maxWidth="lg" disableGutters={true}>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Movielist} />
                <PublicRoute path="/auth" exact component={Auth} />
                <PrivateRoute path="/addmovie" exact component={Manage} />
            </Switch>
        </Container>
    </BrowserRouter>
);

export default App;
