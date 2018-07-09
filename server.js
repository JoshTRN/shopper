var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
var app = express();
var PORT = process.env.PORT || 3001;

//Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
//add routes, both api and view
app.use(routes);

//connect to mongoDB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/shopper");

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/shopper"); 


//var session = require('express-session');
//session for verification
//app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 600000 }}));

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
