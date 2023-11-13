const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost'
const port = process.env.PORT || 3000
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Your custom routes or middleware
  server.get('/custom-route', (req, res) => {
    return app.render(req, res, '/custom', req.query);
  });

  // Default route handling
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
