let http = require('http');
let server = http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});

	response.end("Hello World! be the world greatest software engineer")
})

server.listen(3000, '127.0.0.1', function() {
	console.log("HTTP Server Started");
})
