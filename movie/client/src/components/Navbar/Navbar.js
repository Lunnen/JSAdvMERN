import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import MovieCoolector from "../../images/MovieCoolector.png";
import * as actionType from "../../constants/actionTypes";
import useStyles from "./styles";
const Navbar = (myFunction) => {
  const [user, setUser, post , setPost] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/auth");

    setUser(null);
  };
  
  const addMovie = () => {
    //Move to /form here
    myFunction();
  }

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">
          <img className={classes.image} src={MovieCoolector} alt="movie" height="80" />
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Button component={Link} to="/"  style={{ marginLeft: "10px" }} onClick={addMovie}>
              Add Movie
            </Button>
            <Button component={Link} to="/" style={{ marginLeft: "10px" }}>
              My Movies
            </Button>
            <Button component={Link} to="/" style={{ marginLeft: "10px" }}>
              Account
            </Button>
            <Avatar className={classes.avatar} alt={user?.result.name} src={user?.result.imageUrl}>
              {user?.result.name.charAt(0)}
            </Avatar>

            <Button variant="contained" color="secondary" onClick={logout} className={classes.logout}>
              Logout
            </Button>
          </div>
        ) : (
          <div className={classes.profile}>
            <Button component={Link} to={{ pathname: "/auth/", state: "login" }} variant="contained" color="primary">
              Sign In
            </Button>
            <Button component={Link} to={{ pathname: "/auth/", state: "register" }} style={{ marginLeft: "10px" }}>
              Register
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
