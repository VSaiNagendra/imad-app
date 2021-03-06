var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
app.get('/sai',function(req,res){
    res.send("sai nagendra");
})

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname,'ui/index.html'));
});
app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname,'ui/main.js'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
