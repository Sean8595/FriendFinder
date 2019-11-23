var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static('app/public')) 
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//gives paths for survey and home

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

  //TODO
  
  //have the inputs keep track of information with friendAPI page
  //keep track of users users
  //logic to match users together
