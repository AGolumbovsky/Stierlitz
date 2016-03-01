var express = require('express');

var app = express();

var port = 8777;

// serve static files
app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
	console.log("listening on port " + port);
});