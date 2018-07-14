'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var PATH_DIST = void 0;
if (process.env.NODE_ENV === 'production') {
  PATH_DIST = _path2.default.resolve(__dirname, '../prod_build');
} else {
  PATH_DIST = _path2.default.resolve(__dirname, '../dev_build');
}

app.use('/static', _express2.default.static(PATH_DIST));

app.get('/', function (req, res) {
  res.sendFile(_path2.default.resolve(__dirname, '../index.html'));
});

console.log('Listening at port 3000!');

app.listen(3000);