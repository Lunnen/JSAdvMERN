import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "../../redux/actions/posts";
import Posts from "../Posts/Posts";
const Movielist = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container>
            <Posts setCurrentId={setCurrentId} />
        </Container>
    );
};
export default Movielist;
