var express = require('express')
var path = require('path')

var app = express()

const PATH_DIST = path.resolve(__dirname, 'front-end/dist');

app.use('/static', express.static(PATH_DIST))

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'front-end/index.html'));
})

console.log('Listening at port 3000!')

app.listen(3000)
