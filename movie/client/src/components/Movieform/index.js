import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import { createPost, updatePost } from "../../redux/actions/posts";
import useStyles from "./styles";

const Movieform = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        title: "",
        starring: "",
        time: "",
        genre: "",
        message: "",
        tags: "",
        selectedFile: "",
        director: "",
        creator: "",
    });
    const post = useSelector((state) =>
        currentId
            ? state.posts.find((message) => message._id === currentId)
            : ""
    );
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem("profile"));

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const clear = () => {
        setCurrentId(0);
        setPostData({
            title: "",
            starring: "",
            time: "",
            genre: "",
            message: "",
            tags: "",
            selectedFile: "",
            director: "",
            creator: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        postData.creator = user.result._id;

        if (currentId === 0) {
            dispatch(createPost({ ...postData, name: user?.result?.name }));
            clear();
        } else {
            dispatch(
                updatePost(currentId, { ...postData, name: user?.result?.name })
            );
            clear();
        }
    };
    return (
        <Paper className={classes.paper}>
            <form
                autoComplete="off"
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
            >
                <Typography variant="h6">
                    {currentId
                        ? `Editing "${post.title}"`
                        : "Upload a new Movie"}
                </Typography>
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) =>
                        setPostData({ ...postData, title: e.target.value })
                    }
                />
                <TextField
                    name="director"
                    variant="outlined"
                    label="Directors(coma separated)"
                    fullWidth
                    value={postData.director}
                    onChange={(e) =>
                        setPostData({
                            ...postData,
                            director: e.target.value.split(","),
                        })
                    }
                />
                <TextField
                    name="starring"
                    variant="outlined"
                    label="Starring(coma separated)"
                    fullWidth
                    value={postData.starring}
                    onChange={(e) =>
                        setPostData({
                            ...postData,
                            starring: e.target.value.split(","),
                        })
                    }
                />
                <TextField
                    name="time"
                    variant="outlined"
                    label="Release date"
                    fullWidth
                    value={postData.time}
                    onChange={(e) =>
                        setPostData({ ...postData, time: e.target.value })
                    }
                />
                <TextField
                    name="genre"
                    variant="outlined"
                    label="Genre(coma separated)"
                    fullWidth
                    value={postData.genre}
                    onChange={(e) =>
                        setPostData({
                            ...postData,
                            genre: e.target.value.split(","),
                        })
                    }
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Plot"
                    fullWidth
                    multiline
                    rows={4}
                    value={postData.message}
                    onChange={(e) =>
                        setPostData({ ...postData, message: e.target.value })
                    }
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags (coma separated)"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) =>
                        setPostData({
                            ...postData,
                            tags: e.target.value.split(","),
                        })
                    }
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                            setPostData({ ...postData, selectedFile: base64 })
                        }
                    />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    Submit
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
};

export default Movieform;
