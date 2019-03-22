var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://jriley:Express!1@ds221416.mlab.com:21416/express_api', 
    {useNewUrlParser: true});

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");