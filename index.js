const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send('Eu te ❤');
  res.end();
});

app.listen(2307, () => {
  console.log('connect');
});