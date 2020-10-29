/**
 * node.js test
 * route without express
 */

var http = require('http');
var calcu = require('./Service/calculator');

//서버객체의 생성
http.createServer(function(req, res) {
	
	res.writeHead(200, {'Content-Type': 'text/html'}); //응답의 헤더 설정
	const cal = new calcu();		
	var url = req.url;
	if(url === '/about') {
		for(var i=0; i<10; i++) {
			res.write('<h1>'+cal.stringReturn()+'</h1>');
		}
	} else if(url ==='/contract') {
		
		res.write('<h1>add : '+cal.add()+'</h1>');
		res.write('<h1>sub : '+cal.sub()+'</h1>');
	} else {
		res.write('<h1>Hello World!</h1>');
	}
	res.end();
	
}).listen(3000, function() {
	console.log("server start at port 3000");  //서버객체의 리스너 	
});