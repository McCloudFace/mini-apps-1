const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.use(express.static(__dirname + '/public'));

app.get('/f1', (req, res) => {
  console.log('/f1 req: ', req);
  res.send('/f1 received');
});

app.get('/f2', (req, res) => {
  console.log('/f2 req: ', req);
  res.send('/f2 received');
});

app.get('/f3', (req, res) => {
  console.log('/f3 req: ', req);
  res.send('/f3 received');
});

app.listen(port, () => {
  console.log('Express listening at: http://localhost:' + port);
});