require('isomorphic-fetch');
const SETTINGS=require("./config.js");
const apiQuery=async (method,queryObj)=>{
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
          return response.response;
      });
  return response;
}
const getUser=async (id)=>{
  var method="users.get";
  var queryObj={
    user_ids:id,
    fields:"photo_400_orig,city,bdate",
    v:"5.52",
    access_token:SETTINGS.SERVICE_KEY,
  }
  const response=await apiQuery(method,queryObj);
  return response;
}
const getFriends=async (id)=>{
  return await apiQuery("friends.get",{
    user_id:id,
    fields:"photo_400_orig,city,bdate",
    v:"5.52",
    access_token:SETTINGS.SERVICE_KEY,
  });
}
/*const check=async ()=>{
  const user=await getUser(1);
  console.log(user);
  const friends=await getFriends(731968);
  console.log(friends);
}
check();*/
module.exports={
  getFriends:getFriends,
  getUser:getUser,
}
