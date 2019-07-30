var express = require('express');
var exphbs  = require('express-handlebars');
var sassMiddleware = require("node-sass-middleware");
var app = express();
var path = require("path");
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});
app.get('/site', function (req, res) {
    res.render('site',{
      layout:"site",
    });
});
app.get('/videos', function (req, res) {
  res.render('videos',{
    title:"videos",
    layout:"site"
  });
});
app.get('/PC_requirement', function (req, res) {
  res.render('PC_requirement',{
    title:"PC_requirement",
    layout:"site"
  });
});
app.get('/octane_info', function (req, res) {
  res.render('octane_info',{
    title:"octane_info",
    layout:"site"
  });
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
app.use(
  sassMiddleware({
    src: path.join(__dirname, "scss"),
    dest: path.join(__dirname, "public/css/"),
    debug: true,
    outputStyle: "compressed",
    prefix: "/css"
  })
);

app.use(express.static("public"));
app.listen(3000);
