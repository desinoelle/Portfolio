const express = require("express");
var path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
// HTML Routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/portfolio", function(req, res) {
  res.sendFile(path.join(__dirname, "public/portfolio.html"))
});

app.get("/contact", function(req, res) {
  res.sendFile(path.join(__dirname, "public/contact.html"))
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});