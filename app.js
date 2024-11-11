const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();

// Middleware or routes go here
app.get('/', (req, res) => {
  res.send('Hello, HTTPS!');
  console.log('Received Req');
});

const sslOptions = {
  key: fs.readFileSync(
    path.join(process.env.HOME, '.ssh', 'private.key')
  ),
  cert: fs.readFileSync(
    path.join(process.env.HOME, '.ssh', 'certificate.crt')
  ),
};

// Create HTTPS server
https.createServer(sslOptions, app).listen(3200, () => {
  console.log('Server is running at https://127.0.0.1:3200');
});
