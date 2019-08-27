var express = require('express');
var exphbs  = require('express-handlebars');
var api=require("./model/vk/api.js")
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
app.get("/vk/friends/:id",async (req,res)=>{
  const friends=await api.getFriends(req.params.id)
  res.render("vk-friends",{
    friends:friends.items,
  })
} )
app.get('/vk/users/:id',async function (req, res){
  var method="groups.get";
  var queryObj={
    //user_ids:"1,202352181,53083705,106",
    fields:"photo_400_orig",
    user_id:req.params.id,
    count:"10",
    v:"5.52",
  extended:"1"
  }
  var queryString = Object.keys(queryObj).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(queryObj[key])
  }).join('&');
  var url="https://api.vk.com/method/"+method+"?"+queryString;
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
  res.render('vk-groups',{
    layout:"site",
    groups:response.response.items,
  });
})
app.get('/vk/groups/:id',async function (req, res) {
  //var method="users.get";
  var method="groups.getMembers";
  var queryObj={
    //user_ids:"1,202352181,53083705,106",
    fields:"photo_400_orig,city,bdate",
    group_id:req.params.id,
    count:"10",
    v:"5.52",
  }
  var queryString = Object.keys(queryObj).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(queryObj[key])
  }).join('&');
  var url="https://api.vk.com/method/"+method+"?"+queryString;
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
      users:response.response.items,
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
