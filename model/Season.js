const mongoose = require("mongoose");
const Episode=require("./Episode");
var schema = new mongoose.Schema({
  id: 'number',
  title: 'string',
  year:'number',
  image:'string',
  description:'string',
  episodes:[Episode.schema]
});
var model = mongoose.model('Example', schema);
const list = async (condition) => {
  if(!condition) {
    condition = {}
  }
  return await model.find(condition)
    .exec()
    .then(items => {
      return items;
    });
}
const getSeason=async (id) => {
  return await model.findOne({id})
    .exec()
    .then(item => {
      return item;
    });
}
const getEpisode=async (season_id,id)=>{
  const season=await getSeason(season_id);
  for(var i=0; i<season.episodes.length;i++){
    if(season.episodes[i].id==id){
      return season.episodes[i];
    }
  }
  return null;
}
module.exports={
  getSeason:getSeason,
  getEpisode:getEpisode,
  list:list
}
