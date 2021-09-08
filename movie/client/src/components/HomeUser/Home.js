import React, { useState, useEffect } from "react";
import { Container, Grid, Grow } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import Form from "../Form/Form";
import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts";
const HomeUser = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    const getStateAuth = useSelector((state) => state.auth);
    const isAuthed = getStateAuth;
    /*
    const isAuthed = getStateAuth
        ? getStateAuth.isAuthenticated
            ? true
            : false
        : false;
        */
    console.log("HI" + JSON.stringify(isAuthed));

    return (
        <Grow in>
            <Container>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form
                            currentId={currentId}
                            setCurrentId={setCurrentId}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};
export default HomeUser;
