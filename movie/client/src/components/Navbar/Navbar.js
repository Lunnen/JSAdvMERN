import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import MovieCoolector from "../../images/MovieCoolector.png";
import * as actionType from "../../constants/actionTypes";
import useStyles from "./styles";
import { signout } from "../../actions/auth";

const Navbar = () => {
    const [user, setUser, post, setPost] = useState(
        JSON.parse(localStorage.getItem("profile"))
    );
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();

    const logout = () => {
        //dispatch({ type: actionType.LOGOUT });
        dispatch(signout());
        setUser(null);
    };

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
                <Typography
                    component={Link}
                    to="/"
                    className={classes.heading}
                    variant="h2"
                    align="center"
                >
                    <img
                        className={classes.image}
                        src={MovieCoolector}
                        alt="movie"
                    />
                </Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {user?.result ? (
                    <div className={classes.profile}>
                        <Button
                            component={Link}
                            className={(classes.rightSide, classes.textBox)}
                            to={{ pathname: "/", state: "Home" }}
                        >
                            All Movie
                        </Button>
                        <Button
                            component={Link}
                            className={(classes.rightSide, classes.textBox)}
                            to={{ pathname: "/addmovie", state: "HomeUser" }}
                        >
                            Add Movie
                        </Button>

                        <Avatar
                            className={classes.avatar}
                            alt={user?.result.name}
                            src={user?.result.imageUrl}
                        >
                            {user?.result.name.charAt(0)}
                        </Avatar>

                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={logout}
                            className={classes.logout}
                        >
                            Logout
                        </Button>
                    </div>
                ) : (
                    <div className={classes.profile}>
                        <Button
                            className={(classes.rightSide, classes.signInOut)}
                            component={Link}
                            to={{ pathname: "/auth/", state: "login" }}
                            variant="contained"
                            color="primary"
                        >
                            Sign In
                        </Button>
                        <Button
                            component={Link}
                            className={(classes.rightSide, classes.signInOut)}
                            to={{ pathname: "/auth/", state: "register" }}
                        >
                            Register
                        </Button>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
