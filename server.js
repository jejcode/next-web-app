// const express = require('express');
// const next = require('next');

// const dev = process.env.NODE_ENV !== 'production';
// const hostname = 'localhost'
// const port = process.env.PORT || 3000
// const app = next({ dev, hostname, port });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();

//   // Your custom routes or middleware
//   server.get('/custom-route', (req, res) => {
//     return app.render(req, res, '/custom', req.query);
//   });

//   // Default route handling
//   server.all('*', (req, res) => {
//     return handle(req, res);
//   });

//   server.listen(port, (err) => {
//     if (err) throw err;
//     console.log('> Ready on http://localhost:3000');
//   });
// });
// "start": "NODE_ENV=production node server.js"
const next = require('next')
const http = require('http')

// init next
const app = next(__dirname)
const handle = app.getRequestHandler()

// init normal http server
// createServer(handle).listen(process.env.PORT || 3000)



// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.removeHeader('Transfer-Encoding');
  handle(req,res)
});

server.listen(process.env.PORT || 3000);