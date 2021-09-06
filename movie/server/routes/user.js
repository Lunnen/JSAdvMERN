const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const passportConfig = require("../passport");
const UserModal = require("../models/UserModel");

//Function to create our json webtoken
const signToken = (userId) => {
    return jwt.sign(
        {
            iss: "fantastic4productions",
            sub: userId,
        },
        "fantastic4",
        {
            expiresIn: "1h",
        }
    );
};

router.post("/signup", (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    UserModal.findOne({ email }, (err, user) => {
        if (err) {
            res.status(500).json({
                message: "Something went wrong",
            });
        }
        if (user) {
            res.status(400).json({
                message: "User email already taken",
            });
        } else {
            const newUser = new UserModal({
                username: email,
                password,
                name: `${firstName} ${lastName}`,
            });
            newUser.save((err) => {
                if (err) {
                    res.status(500).json({
                        message: "Something went wrong",
                    });
                } else {
                    res.status(200).json({
                        message: "Account successfully created",
                    });
                }
            });
        }
    });
});

// Login

router.post(
    "/signin",
    passport.authenticate("local", { session: false }),
    (req, res) => {
        if (req.isAuthenticated()) {
            const { _id, username } = req.user;
            const token = signToken(_id);
            res.cookie("access-token", token, {
                httpOnly: true,
                sameSite: true,
            });
            res.status(200).json({
                isAuthenticated: true,
                username: { _id, username },
                message: { msgBody: "Successfully logged in", msgError: false },
            });
        }
    }
);

router.get(
    "/authenticated",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { _id, username } = req.user;
        res.status(200).json({
            result: { _id, username },
        });
    }
);

router.get(
    "/signout",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        UserModal.remove({});
        res.clearCookie("access-token");
        res.status(200).json({ message: "User has been logged out" });
    }
);

module.exports = router;
