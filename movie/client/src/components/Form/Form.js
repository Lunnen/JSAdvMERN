import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import MovieCreationIcon from "@material-ui/icons/MovieCreation";
import FileBase from "react-file-base64";

import { createPost, updatePost } from "../../actions/posts";
import useStyles from "./styles";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: "", message: "", tags: "", selectedFile: "" });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: "", message: "", tags: "", selectedFile: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to insert a new movie!
        </Typography>
        <Typography variant="h7">Welcome to this database of movies, you can help us fill it out by creating an account and uploading your favorite movies.</Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <MovieCreationIcon fontSize="smal" />
        <Typography variant="h6">
          <MovieCreationIcon fontSize="small" />
          {currentId ? `Editing "${post.title}"` : "Upload a new Movie"}
        </Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="director" variant="outlined" label="Directors" fullWidth value={postData.director} onChange={(e) => setPostData({ ...postData, director: e.target.value })} />
        <TextField name="starring" variant="outlined" label="Starring" fullWidth value={postData.starring} onChange={(e) => setPostData({ ...postData, starring: e.target.value })} />
        <TextField name="time" variant="outlined" label="Release date" fullWidth value={postData.time} onChange={(e) => setPostData({ ...postData, time: e.target.value })} />
        <TextField name="genre" variant="outlined" label="Genre" fullWidth value={postData.genre} onChange={(e) => setPostData({ ...postData, genre: e.target.value })} />

        <TextField name="message" variant="outlined" label="Plot" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(",") })} />
        <div className={classes.fileInput}>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
          Submit
        </Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
