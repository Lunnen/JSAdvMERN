import express from "express";
const router = express.Router();

import { signin, signup } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);

/*
router.get("/authenticated", passport.authenticate("jwt", { session: false }), (req, res) => {
  const { _id, username } = req.user;
  res.status(200).json({
    isAuthenticated: true,
    user: { _id, username },
  });
});
*/
export default router;
