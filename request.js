require('isomorphic-fetch');
var url="https://api.vk.com/method/users.get?user_id=1,2&v=5.52&access_token=b7ed65dcb7ed65dcb7ed65dce6b7812136bb7edb7ed65dceabfa9f3a3d557dca808273b";
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
