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
    res.render('game',{
      layout:"game",
    });
});
app.get('/game-2', function (req, res) {
    res.render('game-2',{
      layout:"game",
    });
});
app.use(express.static("public"));
app.listen(3000);
