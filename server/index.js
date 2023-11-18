const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 1488
const statuteRouter = require('./routers/statuteRouter')
mongoose.connect("mongodb://127.0.0.1:27017/statutes").then(() => {
    console.log("db connected");
});

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', statuteRouter)

app.listen(port, () => {
    console.log("Server started");
});
