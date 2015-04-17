/*****************************************************************************/
/* Require modules for the server
/*****************************************************************************/
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var url = require('url');
var app = express();
var root = path.resolve('.');

var ReactTools = require('react-tools');
var React = require('react');
var vm = require('vm');

/*****************************************************************************/
/* Logging middleware */
/*****************************************************************************/
app.use(function(req, res, next) {
  console.log(req.method + ': ' + req.url);
  next();
});

app.use(function(req, res, next) {
  urlParts = url.parse(req.url);
  filename = urlParts.pathname.split('/').pop();

  if (/^\/build/.test(urlParts.pathname)) {
    res.setHeader('Content-Type', 'application/javascript');
    res.end(fs.readFileSync(path.join('build', filename), 'utf8') + '\n');
  } else {
    return next();
  }
});

/*****************************************************************************/
/* Serve any files in the app directory directly with app.html as the default
/* page
/*****************************************************************************/
app.use('/', express.static(path.join(root, 'app'), {index: 'app.html'}));

/*****************************************************************************/
/* Ok let's start the server! */
/*****************************************************************************/
app.listen(3000);
console.log('Server listening on http://localhost:3000');
