var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname));

app.get('/*', function(req, res) {
   res.sendFile(path.join(__dirname, '/index.html')); 
});

app.listen('3001');
console.log('working on 3001');
