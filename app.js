var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});
app.get('/site', function (req, res) {
    res.render('site');
});
app.get('/game', function (req, res) {
    res.render('game');
});
app.listen(3000);
