'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<img src=http://fisl18.softwarelivre.org/wp-content/uploads/2018/06/Logo_G.png>\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

