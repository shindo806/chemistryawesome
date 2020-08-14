const express = require('express');
const next = require('next');
const fetch = require('isomorphic-unfetch');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev,
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/', async (req, res) => {
    const data = await (await fetch('http://localhost:3000/api/post')).json();
    res.data = data;
    return app.render(req, res, '/index', req.query);
  });

  server.get('/b', (req, res) => {
    return app.render(req, res, '/b', req.query);
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
