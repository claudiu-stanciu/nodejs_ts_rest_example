import express = require('express');
let app = express();

app.get('/', function (req, res) {
  res.send('Hello from nodejs with ts :P')
})

app.listen(3000, function () {
  console.log('Example app listening on localhost:3000!')
})