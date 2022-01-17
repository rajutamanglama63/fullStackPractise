const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const fileupload = require("express-fileupload");

const connectDB = require("./config/db");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/posts");
const infoRoute = require("./routes/info");
const imageUploadRoute = require("./routes/upload");

dotenv.config();

const app = express();

const Port = process.env.PORT || 4000;

connectDB();

// express middlewares
app.use(express.json());
app.use(cors());
app.use(fileupload({
    useTempFiles : true
}));

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/info", infoRoute);
app.use("/api/images", imageUploadRoute);

app.listen(Port, () => {
    console.log(`Server running on port http://localhost:${Port}`);
});