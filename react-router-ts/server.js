var express = require('express');
var app = express();
var path = require('path');
var opener = require('opener');

app.use(express.static(__dirname));

['/', '/about', 'contact'].forEach(url => {
   app.get(url, function(req, res) {
      res.sendFile(path.join(__dirname, '/index.html')); 
   });
});

app.listen('3001');
console.log('working on 3001');

opener('http://localhost:3001');