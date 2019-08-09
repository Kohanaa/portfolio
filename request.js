console.log("check");
require('isomorphic-fetch');
var url="https://swapi.co/api/films/2/";
fetch(url)
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(movie) {
        console.log(movie);
    });
