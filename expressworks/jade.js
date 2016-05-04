var express = require('express')
var app = express()

app.set('view engine', 'jade');

app.get('/home', function(req,res){
  var ds = new Date
  ds = ds.toDateString()
  res.render('index', { date: ds });
})

app.listen(process.argv[2])
