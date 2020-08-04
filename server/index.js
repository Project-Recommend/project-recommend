const express = require("express");
// const express() = express();
const path = require("path");
const cors = require('cors')

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/key");

// const mongoose = require("mongoose");
// mongoose
//   .connect(config.mongoURI, { useNewUrlParser: true })
//   .then(() => console.log("DB connected"))
//   .catch(err => console.error(err));

const mongoose = require("mongoose");
const connect = mongoose
    .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

express().use(cors())

express().use(bodyParser.urlencoded({ extended: true }));
express().use(bodyParser.json());
express().use(cookieParser());

express().use('/api/users', require('./routes/users'));
express().use('/api/product', require('./routes/product'));


//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
express().use('/uploads', express.static('uploads'));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

  // Set static folder
  express().use(express.static("client/build"));

  // index.html for all page routes
  express().get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000

express().listen(port, () => {
  console.log(`Server Running at ${port}`)
});