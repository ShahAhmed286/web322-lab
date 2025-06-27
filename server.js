const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const currentTime = new Date().toISOString(); // GMT time
  res.send('Shah Ahmed - WEB322 ' + currentTime); 
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
