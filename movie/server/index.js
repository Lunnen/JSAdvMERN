const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const postRoutes = require("./routes/posts");
const userRouter = require("./routes/user");

const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

//const CONNECTION_URL = process.env.MONGODB_URI || "mongodb+srv://mernAdmin:MPOviCI36n8zFn2p@mern.vxw30.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const CONNECTION_URL = process.env.MONGODB_URI || "mongodb://localhost:27017/fantastic-four-db";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

app.use("/posts", postRoutes);
app.use("/user", userRouter);
