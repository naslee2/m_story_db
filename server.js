var express = require('express');
var session = require('express-session')
var app = express();
var bodyParser = require('body-parser');
var bcrypt =require('bcrypt');
var port = 8000;

app.use(express.static( __dirname + '/angular/dist' ));

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./angular/dist/index.html"))
});

app.listen(port, function() {
    console.log("listening on port "+ port+"!");
});
