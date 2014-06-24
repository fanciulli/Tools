var express = require('express');
var app = express();

app.use('/', function(req, res,next){
	dumpRequest(req);
 	res.send('See log for details');


});

function dumpRequest(req)
{
	console.log("Server received the following request");
	console.log("-------------------------------------");
	console.log("Path: "+req.path);
	console.log("Method: "+req.method);
	console.log("-------------------------------------");
	console.log("HTTP Input Headers");
	
	for(var header in req.headers)
		console.log("	"+header+": "+req.get(header));

	console.log("-------------------------------------");
	console.log("Request Body");
	console.log("");
	req.on('data', function(chunk) {
	  console.log(chunk.toString());
	})
	
}

var port=process.argv[2];
app.listen(port);


console.log("Server is listening on port "+port);
