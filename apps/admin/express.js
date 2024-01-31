// DO NOT use express bridge heavy

const dns = require('dns');
const express = require('express');
const next = require('next');
dns.setDefaultResultOrder('ipv4first');

const dev = process.env.NODE_ENV !== 'production';
const hostname = dev ? 'localhost' : 'repo';
const port = 3002;
const app = next({ dev, dir: process.cwd(), hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use('/static', express.static(process.env.UPLOAD_PATH || '../../upload'));
  server.all('*', (req, res) => handle(req, res));
  server.listen(port);
  console.log(`>: Ready on http://localhost:${port}`);
});
