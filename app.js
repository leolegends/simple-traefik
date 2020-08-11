const http = require('http')
const port = 3000
http.createServer(function (req, res) {
  console.log(`I running in port ${port}`);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World with Docker Traefik and NodeJS!');
  res.end();
}).listen(port);