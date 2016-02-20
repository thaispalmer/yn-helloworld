var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World from YourNode!');
});

app.listen(process.env.YOURNODE_PORT, function () {
  console.log('Example app listening on port ' + process.env.YOURNODE_PORT + '!');
});
