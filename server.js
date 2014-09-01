var express = require('express'),
  cookies = require('cookie-parser'),
  server = express(),
  port = process.env.PORT || 30000,
  staticRoot = __dirname;

server.use(cookies());
server.use('/', express.static(staticRoot));
server.get('/cookies',function(q,r){
  return r.send(200);
});
server.post('/cookies',function(q,r){
  return r.send(200);
});
server.listen(port);
console.log('http://localhost:'+port);
