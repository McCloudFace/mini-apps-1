const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use('/', express.static('client'));

// var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

/*
1. The server must flatten the JSON hierarchy, mapping each
   item/object in the JSON to a single line of CSV report (see
   included sample output), where the keys of the JSON objects
   will be the columns of the CSV report.
2. You may assume the JSON data has a regular structure and
   hierarchy (see included sample file). In other words, all
   sibling records at a particular level of the hierarchy will
   have the same set of properties, but child objects might not
   contain the same properties. In all cases, every property you
   encounter must be present in the final CSV output.
3. You may also assume that child records in the JSON will always
   be in a property called `children`.
*/

var flatten = function (data) {
  var result = [];

  var helper = function (child) {
    var obj = {};
    for (var key in child) {
      if (Array.isArray(child[key]) === false) {
        obj[key] = child[key];
      }
    }
    result.push(obj);

    if (child.children && child.children.length > 0) {
      for (var i = 0; i < child.children.length; i++) {
        helper(child.children[i])
      }
    }
  };

  helper(data);
  return result;
};

app.post('/', urlencodedParser, function (req, res) {
  var formData = req.body.jsonInput;
  formData = JSON.parse(formData);

  var arrOfObjs = flatten(formData);

  var csvStr = '';
  csvStr += Object.keys(arrOfObjs[0]).join(',');
  csvStr += '\n';

  arrOfObjs.forEach(function(val) {
    var newline = Object.values(val).join(',');
    newline += '\n';
    csvStr += newline;
  });

  console.log('csvStr: ', csvStr);

  res.send(csvStr);
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
