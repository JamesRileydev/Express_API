var express = require('express'),
    app = express(),
    port = 3000
var mongo = require('mongodb')

app.get('/', function(req, res) {
    res.json({message: "JS Object"});
});

app.get('/happy', function(req, res) {
    res.send(":)");
});

app.listen(port, function(){
    console.log("App is running on Port " + port);
})