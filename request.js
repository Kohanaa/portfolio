require('isomorphic-fetch');
var url="https://api.vk.com/method/users.get?user_id=1,2&v=5.52&access_token=";
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
