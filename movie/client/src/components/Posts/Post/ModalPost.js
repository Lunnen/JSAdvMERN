import React from "react";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@material-ui/core/";

import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import EditIcon from "@material-ui/icons/Edit";

import { useDispatch } from "react-redux";
import moment from "moment";

import { deletePost } from "../../../actions/posts";
import useStyles from "./styles";

const ModalPost = ({ post, setCurrentId, updateModalCard }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem("profile"));
    const defaultMovieImg =
        "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png";

    return (
        <div className={classes.modalCardWrapper}>
            <Card className={classes.modalCard}>
                <CardMedia
                    className={classes.media}
                    image={post.selectedFile || defaultMovieImg}
                    title={post.title}
                />
                <div className={classes.overlay}>
                    <Typography variant="body2">
                        {moment(post.createdAt).fromNow()}
                    </Typography>
                </div>
                <div className={classes.overlay2}>
                    {user?.result?._id === post?.creator && (
                        <Button
                            onClick={() => {
                                setCurrentId(post._id);
                                updateModalCard();
                            }}
                            style={{ color: "black" }}
                            size="small"
                        >
                            <EditIcon fontSize="small" />
                        </Button>
                    )}
                </div>

                <div className={classes.details}>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="h2"
                    >
                        {post.tags.map((tag) => `#${tag} `)}
                    </Typography>
                </div>
                <Typography
                    className={classes.title}
                    gutterBottom
                    variant="h5"
                    component="h2"
                >
                    {post.title}
                </Typography>
                <CardContent>
                    <Typography color="textSecondary">
                        {post.message}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Directors:{post.director}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Starring:{post.starring}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Genre:{post.genre}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Time: {post.time}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        <b>Post by:</b> {post.name}
                    </Typography>
                </CardContent>

                <CardActions className={classes.cardActions}>
                    <Button
                        className={classes.close}
                        onClick={() => updateModalCard(false)}
                    >
                        X
                    </Button>

                    {user?.result?._id === post?.creator && (
                        <Button
                            size="small"
                            color="secondary"
                            onClick={() => dispatch(deletePost(post._id))}
                        >
                            <DeleteSweepIcon fontSize="small" /> Delete
                        </Button>
                    )}
                </CardActions>
            </Card>
        </div>
    );
};

export default ModalPost;
