var dispatcher = require('httpdispatcher');
var express = require('express');
var app = express();
var http = require('http');

const PORT = process.env.PORT || 8000;

// const PORT = 8000;
console.log("hello");

function handleRequest(request, response){
//    response.end('it works? da fuq?' + request.url());
    console.log("request received");
    try{
        dispatcher.dispatch(request, response);
    }catch(err){
        console.log("failure");
        console.log(err); 
    }
}

dispatcher.setStatic('resources');

//A sample GET request    
dispatcher.onGet("/page1", function(req, res) {
    console.log("well, got something? maybe its sweig");
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Page One');
});    


//this deals with registration
dispatcher.onGet("/api/v1/shorten", function(req,res){
	console.log("sweeeiggg baby sweiggg");
	console.log(req.params);
	console.log(req.params.title);
	//HERE I GOTTA CHECK WITH IVEN TO DO REGISTRATION AND SHIT
	//i needda query database roight?;
	res.end('login');

})

//deals with summary
dispatcher.onGet("/api/v1/shorten", function(req,res){
	console.log("sumarize mah swag");
	console.log(req.params);
	console.log(req.params.title);
	res.end('summarized');
})
//A sample POST request
dispatcher.onPost("/post1", function(req, res) {
    console.log("yolosweig");


    res.end('Got Post Data');
});

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("server listening on local host port&s",PORT);

})




//-------------------------------------------------SUMMARIZER STARTS HERE-----------------------------------------