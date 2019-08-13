var express = require('express');
var exphbs  = require('express-handlebars');
var sassMiddleware = require("node-sass-middleware");
var app = express();
var path = require("path");
require('isomorphic-fetch');
var Season=require("./model/Season");
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});
app.get('/starwars', function (req, res) {
    res.render('starwars',{
      layout:"starwars",
    });
});
app.get('/starwars/movie',async function (req, res) {
  var url="https://swapi.co/api/films/2/";
  var movie=await fetch(url)
      .then(function(response) {
          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          return response.json();
      })
      .then(function(movie) {
        return movie;
      });
    res.render('starwars-movie',{
      layout:"starwars",
      movie:movie
    });
});
app.get('/vk',async function (req, res) {
  var url="https://api.vk.com/method/users.get?user_ids=1%2C202352181%2C53083705&fields=photo_400_orig&v=5.52&access_token=b7ed65dcb7ed65dcb7ed65dce6b7812136bb7edb7ed65dceabfa9f3a3d557dca808273b";
  var response=await fetch(url)
      .then(function(response) {
          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          return response.json();
      })
      .then(function(response) {
          return response;
      });
  console.log(response);

    res.render('vk-users',{
      layout:"site",
      users:response.response,
    });
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
app.get('/black-mirror', function (req, res) {
    res.render('black-mirror',{
      layout:"black-mirror",
      items:Season.items
    });
});
app.get('/black-mirror/season/:id', function (req, res) {
    var season=Season.getSeason(req.params.id);
    res.render('season',{
      layout:"black-mirror",
      bg:season.image,
      item:season
    });
});
app.get('/black-mirror/episode/:season_id/:id', function (req, res) {
    var episode=Season.getEpisode(req.params.season_id,req.params.id)
    res.render('episode',{
      layout:"black-mirror",
      bg:episode.image,
      item:episode,
      season_id:req.params.season_id
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
