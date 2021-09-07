import React, { useState, useEffect } from "react";
import { Container, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";


import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts";
import Form from '../Form/Form';

const Home = (addMovieState, myFunction) => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const [view, setView] = useState("default");

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  

  console.log(addMovieState)

  switch(addMovieState) {
    case "addMovie":
      return(
        <Container>
          <Posts setCurrentId={setCurrentId} />
          <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Container>
      )
      default:
        return(
          <Container>
          <Posts setCurrentId={setCurrentId} />
          <Button onClick={myFunction}> ClickMe </Button>
          </Container>
        )
  }
};

export default Home;
