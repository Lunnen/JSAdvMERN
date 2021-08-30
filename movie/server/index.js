import express from "express";
import bodyParse from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
const app = express();



app.use(bodyParse.json({limit: "30mb",extended: true}))
app.use(bodyParse.urlencoded({limit: "30mb",extended: true}))
app.use(cors());
app.use('/posts',postRoutes);
const CONNECTION_URL ="mongodb+srv://mernAdmin:MPOviCI36n8zFn2p@mern.vxw30.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);


