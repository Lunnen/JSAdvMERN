import React, { useState, useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const [userPosts, setUserPosts] = useState(posts);
    const user = JSON.parse(localStorage.getItem("profile"));
    var pathname = window.location.pathname;
    const classes = useStyles();

    useEffect(() => {
        setUserPosts(posts);
        if (pathname === "/addmovie") {
            const copy = posts.filter(
                (post) => post.creator === user.result._id
            );
            setUserPosts(copy);
        }
        //eslint-disable-next-line
    }, [posts]);

    return !posts.length ? (
        <CircularProgress />
    ) : (
        <Grid
            className={classes.container}
            container
            alignItems="stretch"
            spacing={3}
        >
            {userPosts.map((post) => (
                <Grid key={post._id} item xs={12} sm={6} md={4}>
                    <Post post={post} setCurrentId={setCurrentId} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Posts;
