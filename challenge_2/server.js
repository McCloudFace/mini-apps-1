const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('client'));
app.use(express.urlencoded({ extended: true }));

app.post('/', function (req, res) {
  console.log(req.body.jsonInput);
  res.send(req.body.jsonInput);
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
