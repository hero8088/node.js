/**
 * node.js test
 * route without express
 * file output
 */

const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer( (req, res) => {
	
	const path = url.parse(req.url, true).pathname;
	if (req.method === 'GET') {
		
			if (path === '/about') {
				res.writeHead(200, { 'Content-Type' : 'text/html' });
				fs.readFile(__dirname + '/html/about.html', (err, data) => {
					if (err) {
						res.end('<h1>not exist page!!!</h1>', 'utf-8');
					}
					res.end(data, 'utf-8');
				});
			} else if (path === '/') {
				res.writeHead(200, { 'Content-Type' : 'text/html' });
				fs.readFile(__dirname + '/html/main.html', (err, data) => {
					if (err) {
						res.end('<h1>not exist page!!!</h1>', 'utf-8');
					}
					res.end(data, 'utf-8');
				});
			} else {
				res.statusCode = 404;
				res.end('<h1>not exist address!!!</h1>', 'utf-8');
			}
		 
	}
	
	
}).listen(3000, function() {
	console.log("server start at port 3000");
});


