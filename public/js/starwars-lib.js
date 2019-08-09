function getMovie(el,url){
  $.ajax({
    url:url
  }).done(function(data){
    console.log(data);
    drawEpisode(el,data);
  })
}
function drawEpisode(el,data){
  var wrapper=$("<div>");
  var title=$("<h2>");
  title.html(data.title);
  wrapper.append(title);
  var opening_crawl=$("<p>");
  opening_crawl.html(data.opening_crawl);
  wrapper.append(opening_crawl);
  el.append(wrapper);
}
function getPlanet(el,url){
  $.ajax({
    url:url
  }).done(function(data){
    console.log(data);
    drawEpisode(el,data);
  })
}
function drawPlanet(el,data){
  var wrapper=$("<div>");
  var title=$("<h2>");
  title.html(data.name);
  wrapper.append(title);
  var population=$("<p>");
  population.html(data.population);
  wrapper.append(population);
  el.append(wrapper);
}
