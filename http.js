const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end(`Welcome to my home page`);
  }
  if (req.url === '/about') {
    res.end(`Bongani is a node developer`);
  }
  res.end(`<h1>Oooop!</h1>
        <p>The page you are looking for is not available</p>
        <p><a href="/">back Home</a></p>`);
});

server.listen(5000);
