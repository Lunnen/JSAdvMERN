import React, { useState, useEffect } from "react";
import { Container, Grid, Grow } from "@material-ui/core";
import { useDispatch } from "react-redux";

import Movieform from "../Movieform";
import { getPosts } from "../../redux/actions/posts";
import Posts from "../Posts/Posts";
const Manage = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

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
                        <Movieform
                            currentId={currentId}
                            setCurrentId={setCurrentId}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};
export default Manage;