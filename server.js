var express = require('express');
var session = require('express-session')
var app = express();
var bodyParser = require('body-parser');
var bcrypt =require('bcrypt');
var mysql = require('mysql');
var path = require('path');
var port = 8000;

app.use(express.static( __dirname + '/angular/dist' ));

app.get("/", function(req,res)
{
	//NOTES():Connects to the database
	var connection = mysql.createConnection(
	{
		host: 'localhost',
		user: 'user',
		password: 'GuestUser',
		database: 'MapleStory2_DB'
	});

	connection.query("SELECT * from test",(err,rows,field) => {
		if (err)
		{
			res.send(err);
		} else {
			res.json(rows);
		}
	});

});

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./angular/dist/index.html"))
});



app.listen(port, function() {
    console.log("listening on port "+ port+"!");
});
