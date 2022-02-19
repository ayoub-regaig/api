//1.creation server
const express = require("express");
const configDB = require("./config/configDB");

const User = require("./models/User");

const userRouter = require("./routes/userRouter");

const app = express();


configDB();
app.use(express.json())

app.use("/api", userRouter);

const PORT = 4000;
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`Server is running on port ${PORT}`)
);