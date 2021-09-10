import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core/";

import moment from "moment";

import PopupPost from "./PopupPost";
import useStyles from "./styles";

import { useLocation } from "react-router-dom";

const Post = ({ post, setCurrentId }) => {
  const [viewCard, setViewCard] = useState(false);
  const classes = useStyles();
  const defaultMovieImg = "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png";

  const updateModalCard = () => {
    setViewCard((prev) => !prev);
  };

  const user = JSON.parse(localStorage.getItem("profile"));
  const location = useLocation();

  const [isItThisPage, setIsItThisPage] = useState();

  const isItListPageAndUserWhoCreated = isItThisPage && user?.result?._id === post?.creator;

  useEffect(() => {
    location.pathname === "/" ? setIsItThisPage(true) : setIsItThisPage(false);
  }, [location]);

  return (
    <>
      {viewCard && <PopupPost post={post} setCurrentId={setCurrentId} updateModalCard={updateModalCard} />}

      <Card
        className={classes.card}
        style={{
          borderColor: isItListPageAndUserWhoCreated && isItThisPage ? "#F7B200" : "black",
        }}
        onClick={updateModalCard}
      >
        <CardMedia className={classes.media} image={post.selectedFile || defaultMovieImg} title={post.title} />
        <div className={classes.overlay}>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>

        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">
          {post.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {post.message}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <b>Post by:</b> {post.name}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Post;
