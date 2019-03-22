var express = require('express'),
    app = express(),
    port = 3000

var todoRoutes = require('./routes/todos');

app.get('/', function(req, res) {
    res.json('Root Route Reached');
});

app.use('/api/todos', todoRoutes);

app.listen(port, function(){
    console.log("App is running on Port " + port);
})