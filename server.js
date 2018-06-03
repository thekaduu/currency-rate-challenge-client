const express = require('express')
let app = express()
const port = 80

app.listen(port);


app.get('/',function(req,res){
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/bundle.js',function(req,res){
    res.sendFile(__dirname + '/public/bundle.js');
});

app.use(express.static('public'));


app.use(function(req, res, next) {
    res.status(404).sendFile(__dirname + '/public/404.html')
});