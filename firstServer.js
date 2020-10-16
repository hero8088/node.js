var http = require('http');

var server = http.createServer();
server.on('request', doRequest);
server.listen(5678);
console.log('Server running man!!');

function doRequest(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	res.write('<h1>Hello World</h1>');
	res.write('<hr/>');
	res.write('<h6>node js 첫번째 예제 입니다.</h6>');
	res.end();
}