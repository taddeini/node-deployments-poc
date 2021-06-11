const express = require('express');
const morgan = require('morgan');
// port change helped
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8080;

const app = express();

app.use(morgan('combined'));

app.get('/', (re, res) => {
  res.json('Hello node-deployment-poc!');
});

app.listen(port, host, () => {
  console.log(`HTTP server listening at http://${host}:${port}`);
});
