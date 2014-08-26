var http= require('http');
http.createServer(function(req,res){
res.writeHeader(200,{'Content-Type':'text/html'});
res.end('<h1>Hello World!</h1>');
}).listen(8080,'127.0.0.1');
console.log('Server running at http://127.0.0.1:8080');